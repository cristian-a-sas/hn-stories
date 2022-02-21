import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const config = {
  databaseURL: "https://hacker-news.firebaseio.com",
};

const app = initializeApp(config);
const db = getDatabase(app);

export default db;
