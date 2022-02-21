import StoryList from "../components/StoryList";
import styles from "./index.module.scss";

function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <StoryList />
      </main>
    </div>
  );
}

export default HomePage;
