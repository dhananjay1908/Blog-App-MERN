import styles from "./themetoggle.module.css";
import moon from "../../Images/moon.png"
import sun from "../../Images/sun.png"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const ThemeToggle = () => {
  const {theme, toggle} = useContext(ThemeContext)
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <img src={moon} alt="" />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <img src={sun} alt="" />
    </div>
  );
};

export default ThemeToggle;