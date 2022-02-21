import { StoryProps } from "./Story.types";
import Image from "next/image";
import timeSince from "../../utils/timeSince";
import styles from "./Story.module.scss";
import Upvote from "../../public/arrow-up.svg";

export default function Story({
  storyData,
  userData,
  toggleUpvote,
  upvoted,
}: StoryProps) {
  const { id: storyId, title, url, time, score } = storyData || {};
  const { id: userId, karma: userKarma } = userData || {};

  const urlEl = url && new URL(url);
  const domain = urlEl?.hostname;

  function handleUpvoteClick() {
    toggleUpvote();
  }

  return (
    <div className={styles.container}>
      <button
        aria-label={`${upvoted ? "Un-upvote" : "Upvote"} story`}
        aria-pressed={upvoted}
        onClick={handleUpvoteClick}
        className={`${styles.score} ${upvoted ? styles.upvoted : ""}`}
      >
        {upvoted ? score + 1 : score}
        <div>
          <Upvote />
        </div>
      </button>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>
            <h2>
              <a
                href={url || `https://news.ycombinator.com/item?id=${storyId}`}
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </a>
              {domain && (
                <a
                  href={url}
                  aria-hidden
                  target="_blank"
                  rel="noreferrer"
                  className={styles.domain}
                >
                  ({domain})
                </a>
              )}
            </h2>
          </div>
          <div className={styles.meta}>
            <p aria-label={`Posted by ${userId}, ${timeSince(time)}`}>
              By{" "}
              <a
                href={`https://news.ycombinator.com/user?id=${userId}`}
                rel="author noreferrer"
                target="_blank"
              >
                {userId}
              </a>{" "}
              ({userKarma}){" "}
              {
                timeSince(
                  time
                ) /*TODO: Add a title attribute so we can show exact date and time on hover */
              }
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/dummy.jpg"
            layout={"fill"}
            objectFit={"cover"}
            alt="Grains"
          />
        </div>
      </div>
    </div>
  );
}
