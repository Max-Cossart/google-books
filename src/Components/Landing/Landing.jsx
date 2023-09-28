import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <h1 className={styles.header}>Welcome to the Library app!</h1>
      <h3 className={styles.sub_header}>
        Here you will be able to look up books and get some information about
        them.
      </h3>
    </div>
  );
};

export default Landing;
