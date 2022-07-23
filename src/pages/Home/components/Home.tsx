import React from "react";

import styles from "./Home.module.scss";

import { Top } from "./Top/Top";
import { Bottom } from "./Bottom/Bottom";

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Top />
      <Bottom />
    </div>
  );
};
