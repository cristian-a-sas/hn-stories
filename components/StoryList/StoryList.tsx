import StoryContainer from "../Story";
import {
  CleanedStoryDataType,
  CleanedUserDataType,
} from "../Story/Story.types";
import styles from "./StoryList.module.scss";

type StoryListProps = {
  storiesData: CleanedStoryDataType[];
  usersData: CleanedUserDataType[];
};

export default function StoryList({ storiesData, usersData }: StoryListProps) {
  return (
    <div className={styles.container}>
      {storiesData && usersData ? (
        <ul className={styles.storyList}>
          {storiesData.map((storyData) => (
            <li key={storyData.id}>
              <StoryContainer
                storyData={storyData}
                userData={usersData?.find(
                  (userData) => userData.id === storyData.by
                )}
              />
            </li>
          ))}
        </ul>
      ) : (
        // TODO: Add a loading skeleton instead
        <p className={styles.loadingMessage}>Loading 10 random stories...</p>
      )}
    </div>
  );
}
