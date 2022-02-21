import Story from "./Story";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import storyMock from "../../__mockData__/story";
import userMock from "../../__mockData__/user";

export default {
  title: "Components/Story",
  component: Story,
} as ComponentMeta<typeof Story>;

const Template: ComponentStory<typeof Story> = (args) => <Story {...args} />;

export const Default = Template.bind({});

Default.args = {
  storyData: storyMock,
  userData: userMock,
  upvoted: false,
};

export const Upvoted = Template.bind({});

Upvoted.args = {
  storyData: storyMock,
  userData: userMock,
  upvoted: true,
};
