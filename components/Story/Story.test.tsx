import { render } from "@testing-library/react";
import Story from "./Story";
import { Default, Upvoted } from "./Story.stories";
import storyMock from "../../__mockData__/story";
import userMock from "../../__mockData__/user";
import timeSince from "../../utils/timeSince";

describe("Story", () => {
  test("it renders the component correctly", () => {
    const { getByText, getByLabelText } = render(<Story {...Default.args} />);

    expect(getByText(storyMock.title)).toBeInTheDocument();
    expect(getByText(storyMock.score)).toBeInTheDocument();
    expect(getByText(userMock.id)).toBeInTheDocument();
    expect(
      getByLabelText(`Posted by ${userMock.id}, ${timeSince(storyMock.time)}`)
    ).toBeInTheDocument();
    expect(getByLabelText(`Upvote story`)).toBeInTheDocument();
  });

  test("it renders the component correctly when upvoted", () => {
    const { getByText, getByLabelText } = render(<Story {...Upvoted.args} />);

    expect(getByText(storyMock.title)).toBeInTheDocument();
    expect(getByText(storyMock.score + 1)).toBeInTheDocument();
    expect(getByText(userMock.id)).toBeInTheDocument();
    expect(
      getByLabelText(`Posted by ${userMock.id}, ${timeSince(storyMock.time)}`)
    ).toBeInTheDocument();
    expect(getByLabelText(`Un-upvote story`)).toBeInTheDocument();
  });
});
