import StoryList from "./StoryList";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import storiesMock from "../../__mockData__/stories";
import usersMock from "../../__mockData__/users";

export default {
  title: "Components/StoryList",
  component: StoryList,
} as ComponentMeta<typeof StoryList>;

const Template: ComponentStory<typeof StoryList> = (args) => (
  <StoryList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  storiesData: storiesMock,
  usersData: usersMock,
};

export const Loading = Template.bind({});

Loading.args = {
  storiesData: null,
  usersData: null,
};
