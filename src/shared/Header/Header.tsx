import React, { FC } from "react";

import styles from "./Header.module.scss";
import { HeaderLogo } from "../../images/header";
import { HeaderRight } from "./HeaderRight";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <HeaderLogo className={styles.logo} />
        <h1 className={styles.title}>Weather</h1>
      </div>

      <HeaderRight />
    </header>
  );
};
