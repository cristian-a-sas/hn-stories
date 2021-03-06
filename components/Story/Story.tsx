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
  const timeInMS = time * 1000;

  function handleUpvoteClick() {
    toggleUpvote();
  }

  return (
    <div className={styles.container}>
      {/** The Upvote button should be refactored into its own component */}
      <button
        //aria-hidden={/* Add rule to hide on desktop */}
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
                  {" "}
                  ({domain})
                </a>
              )}
            </h2>
          </div>
          <div className={styles.meta}>
            <button
              //aria-hidden={/* Add rule to hide on mobile */}
              aria-label={`${upvoted ? "Un-upvote" : "Upvote"} story`}
              aria-pressed={upvoted}
              onClick={handleUpvoteClick}
              className={`${styles.scoreMobile} ${
                upvoted ? styles.upvoted : ""
              }`}
            >
              {upvoted ? score + 1 : score}
              <div>
                <Upvote />
              </div>
            </button>
            <p aria-label={`Posted by ${userId}, ${timeSince(timeInMS)}`}>
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
                  timeInMS
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
