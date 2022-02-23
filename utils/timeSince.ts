type interval = {
  label: "second" | "minute" | "hour" | "day" | "month" | "year";
  seconds: number;
};

const intervals: interval[] = [
  { label: "year", seconds: 31536000 },
  { label: "month", seconds: 2592000 },
  { label: "day", seconds: 86400 },
  { label: "hour", seconds: 3600 },
  { label: "minute", seconds: 60 },
  { label: "second", seconds: 1 },
];

/**
 * Helper function that returns a user friendly string describing the time that has passed,
 * either based on the current time, or a custom time reference.
 * @param time
 * @param timeReference
 * @returns string
 */
function timeSince(time: number, timeReference?: number): string {
  if (typeof time === "number") {
    const seconds = ((timeReference || Date.now()) - time) / 1000;
    const interval = intervals.find((i) => i.seconds <= seconds);
    const count = Math.floor(seconds / interval.seconds);

    return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
  }

  return null;
}

export default timeSince;
