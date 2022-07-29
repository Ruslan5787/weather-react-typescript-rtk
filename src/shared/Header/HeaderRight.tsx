import React from "react";

import styles from "./Header.module.scss";

import { ChangeThemeButton } from "./ChangeThemeButton";
import { SearchField } from "./SearchField";

export const HeaderRight = () => {
  return (
    <div className={styles.wrapper}>
      <ChangeThemeButton />
      <SearchField />
    </div>
  );
};
