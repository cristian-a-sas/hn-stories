export type StoryContainerProps = {
  storyData: CleanedStoryDataType;
  userData: CleanedUserDataType;
};

export type StoryProps = {
  storyData: CleanedStoryDataType;
  userData: CleanedUserDataType;
  upvoted: boolean;
  toggleUpvote: () => void;
};

export type StoryDataType = {
  id: number;
  deleted: boolean;
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  by: string;
  time: number;
  text: string;
  dead: boolean;
  parent: number;
  poll: number;
  kids: Array<number>;
  url: string;
  score: number;
  title: string;
  parts: Array<number>;
  descendants: number;
};

export type CleanedStoryDataType = {
  id: number;
  by: string;
  time: number;
  url: string;
  score: number;
  title: string;
};

export type UserDataType = {
  id: string;
  created: number;
  karma: number;
  about: string;
  submitted: Array<number>;
};

export type CleanedUserDataType = {
  id: string;
  karma: number;
};
