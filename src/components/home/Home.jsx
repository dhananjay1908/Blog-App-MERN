import Cardlist from "../cardlist/Cardlist";
import CategoryList from "../categorylist/CategoryList";
import Menu from "../menu/Menu";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <CategoryList />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}
