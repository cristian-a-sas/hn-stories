import timeSince from "./timeSince";

describe("timeSince", () => {
  test("it does not crash when passed the wrong type", () => {
    // @ts-ignore
    expect(timeSince("time")).toBeNull();
    // @ts-ignore
    expect(timeSince({})).toBeNull();
    // @ts-ignore
    expect(timeSince([])).toBeNull();
    // @ts-ignore
    expect(timeSince()).toBeNull();
    expect(timeSince(undefined)).toBeNull();
    expect(timeSince(null)).toBeNull();
  });
  describe("renders the string relative to now", () => {
    test("it returns the correct string for seconds", () => {
      const now = new Date();
      const time = now.setSeconds(now.getSeconds() - 10);

      expect(timeSince(time)).toEqual("10 seconds ago");
    });

    test("it returns the correct string for minutes", () => {
      const now = new Date();
      const time = now.setMinutes(now.getMinutes() - 10);

      expect(timeSince(time)).toEqual("10 minutes ago");
    });

    test("it returns the correct string for hours", () => {
      const now = new Date();
      const time = now.setHours(now.getHours() - 10);

      expect(timeSince(time)).toEqual("10 hours ago");
    });

    test("it returns the correct string for days", () => {
      const now = new Date();
      const time = now.setHours(now.getHours() - 24 * 10);

      expect(timeSince(time)).toEqual("10 days ago");
    });

    test("it returns the correct string for months", () => {
      const now = new Date();
      const time = now.setMonth(now.getMonth() - 10);

      expect(timeSince(time)).toEqual("10 months ago");
    });

    test("it returns the correct string for years", () => {
      const now = new Date();
      const time = now.setFullYear(now.getFullYear() - 10);

      expect(timeSince(time)).toEqual("10 years ago");
    });
  });

  describe("renders the string relative to a custom date", () => {
    test("it returns the correct string for 1 second ago", () => {
      const now = new Date();
      const customDate = new Date();
      const customTimestamp = customDate.setSeconds(
        customDate.getSeconds() - 9
      );
      const time = now.setSeconds(now.getSeconds() - 10);

      expect(timeSince(time, customTimestamp)).toEqual("1 second ago");
    });

    test("it returns the correct string for 1 minute ago", () => {
      const now = new Date();
      const customDate = new Date();
      const customTimestamp = customDate.setMinutes(
        customDate.getMinutes() - 9
      );
      const time = now.setMinutes(now.getMinutes() - 10);

      expect(timeSince(time, customTimestamp)).toEqual("1 minute ago");
    });

    test("it returns the correct string for 1 hour ago", () => {
      const now = new Date();
      const customDate = new Date();
      const customTimestamp = customDate.setHours(customDate.getHours() - 9);
      const time = now.setHours(now.getHours() - 10);

      expect(timeSince(time, customTimestamp)).toEqual("1 hour ago");
    });

    test("it returns the correct string for 1 day ago", () => {
      const now = new Date();
      const customDate = new Date();
      const customTimestamp = customDate.setHours(
        customDate.getHours() - 24 * 9
      );
      const time = now.setHours(now.getHours() - 24 * 10);

      expect(timeSince(time, customTimestamp)).toEqual("1 day ago");
    });

    test("it returns the correct string for 1 month ago", () => {
      const now = new Date();
      const customDate = new Date();
      const customTimestamp = customDate.setHours(
        customDate.getHours() - 24 * 30 * 9
      );
      const time = now.setMonth(now.getMonth() - 10);

      expect(timeSince(time, customTimestamp)).toEqual("1 month ago");
    });

    test("it returns the correct string for 1 year ago", () => {
      const now = new Date();
      const customDate = new Date();
      const customTimestamp = customDate.setFullYear(
        customDate.getFullYear() - 9
      );
      const time = now.setFullYear(now.getFullYear() - 10);

      expect(timeSince(time, customTimestamp)).toEqual("1 year ago");
    });
  });
});
