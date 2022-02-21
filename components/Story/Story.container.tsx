import { useEffect, useState } from "react";
import {
  CleanedUserDataType as UserType,
  CleanedStoryDataType as StoryType,
  StoryContainerProps,
} from "./Story.types";
import { ref, onValue } from "firebase/database";
import Story from "./Story";
import db from "../../utils/database";

export default function StoryContainer({
  storyData: initialStoryData,
  userData: initialUserData,
}: StoryContainerProps) {
  const [storyData, setStoryData] = useState<StoryType>(initialStoryData);
  const [userData, setUserData] = useState<UserType>(initialUserData);
  const [upvoted, setUpvoted] = useState<boolean>(false);

  // Subscribe to real time updates for the story's data
  useEffect(() => {
    if (storyData?.id) {
      const storyRef = ref(db, `v0/item/${storyData.id}`);

      onValue(storyRef, (snapshot) => {
        const data: StoryType = snapshot.val();

        setStoryData({
          id: data.id,
          title: data.title,
          url: data.url,
          time: data.time,
          score: data.score,
          by: data.by,
        });
      });
    }
  }, [storyData?.id]);

  // Subscribe to real time updates for the user's data
  useEffect(() => {
    if (userData?.id) {
      const userRef = ref(db, `v0/user/${userData.id}`);

      onValue(userRef, (snapshot) => {
        const data: UserType = snapshot.val();

        setUserData({
          id: data.id,
          karma: data.karma,
        });
      });
    }
  }, [userData?.id]);

  function toggleUpvote() {
    setUpvoted(!upvoted);
  }

  return (
    <Story
      storyData={storyData}
      userData={userData}
      toggleUpvote={toggleUpvote}
      upvoted={upvoted}
    />
  );
}
