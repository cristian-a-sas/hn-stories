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

function timeSince(time: number): string {
  const seconds = Math.floor(Date.now() / 1000 - time);
  const interval = intervals.find((i) => i.seconds < seconds);
  const count = Math.floor(seconds / interval.seconds);

  return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
}

export default timeSince;

// TODO: Add unit tests for this helper
