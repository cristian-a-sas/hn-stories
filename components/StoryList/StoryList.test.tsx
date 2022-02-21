import { render } from "@testing-library/react";
import StoryList from "./StoryList";
import { Default } from "./StoryList.stories";

describe("StoryList", () => {
  test("it renders Default", () => {
    render(<StoryList {...Default.args} />);
  });

  // TODO: Add unit tests
});
