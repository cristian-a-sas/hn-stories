import StoryList from "./StoryList";
import {
  StoryDataType,
  CleanedUserDataType,
  CleanedStoryDataType,
  UserDataType,
} from "../Story/Story.types";
import { ref, onValue } from "firebase/database";
import db from "../../utils/database";
import { useEffect, useState, useCallback } from "react";

function spliceRandomValueFromArray(array: Array<number>): number {
  return array.splice(Math.floor(Math.random() * array.length), 1)[0];
}

export default function StoryListContainer() {
  const [storiesData, setStoriesData] = useState<CleanedStoryDataType[]>();
  const [usersData, setUsersData] = useState<CleanedUserDataType[]>();

  // Fetch a specific story's data and subscribe for real time updates
  // Only take the data we need.
  const fetchStoryData = useCallback(async (storyId) => {
    const storyData = await new Promise<CleanedStoryDataType>((resolve) => {
      onValue(
        ref(db, `v0/item/${storyId}`),
        (snapshot) => {
          const data: StoryDataType = snapshot.val();

          if (data) {
            resolve({
              id: data.id,
              title: data.title,
              url: data.url,
              time: data.time,
              score: data.score,
              by: data.by,
            });
          }
        },
        { onlyOnce: true }
      );
    });

    return storyData;
  }, []);

  // Fetch a specific user's data and subscribe for real time updates
  // Only take the data we need.
  // TODO: Rethink whether we actually need real time updates for the user data
  const fetchUserData = useCallback(async (userId) => {
    const storyData = await new Promise<CleanedUserDataType>((resolve) => {
      onValue(
        ref(db, `v0/user/${userId}`),
        (snapshot) => {
          const data: UserDataType = snapshot.val();

          if (data) {
            resolve({
              id: data.id,
              karma: data.karma,
            });
          }
        },
        { onlyOnce: true }
      );
    });

    return storyData;
  }, []);

  // Take 10 random ids, and trigger the fetching of the data,
  // together with setting it to the state
  const fetchData = useCallback(
    async (topStoriesIds) => {
      const topStoriesIdsCopy = [...topStoriesIds];
      const tenRandomStoriesIds = [...Array(10)].map(() =>
        spliceRandomValueFromArray(topStoriesIdsCopy)
      );
      const storiesData = await Promise.all(
        tenRandomStoriesIds.map(async (storyId) => fetchStoryData(storyId))
      );
      const stories = storiesData.sort((a, b) => a.score - b.score);
      const users = await Promise.all(
        stories.map(async (storyData) => fetchUserData(storyData.by))
      );

      setStoriesData(stories);
      setUsersData(users);
    },
    [fetchStoryData, fetchUserData]
  );

  // Fetch the top stories once, and trigger the fetching of data
  // Thought: Could also be fetched on the server as well, using getServerSideProps
  useEffect(() => {
    onValue(
      ref(db, "v0/topstories"),
      (snapshot) => {
        fetchData(snapshot.val());
      },
      {
        onlyOnce: true,
      }
    );
  }, [fetchData]);

  return <StoryList storiesData={storiesData} usersData={usersData} />;
}
