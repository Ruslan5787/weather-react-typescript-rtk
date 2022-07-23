import styles from "./Header.module.scss";
import React from "react";

import { ChangeThemeButton } from "./ChangeThemeButton";
import { HeaderSearchField } from "./HeaderSearchField";

export function HeaderRight() {
  return (
    <div className={styles.wrapper}>
      <ChangeThemeButton />
      <HeaderSearchField />
    </div>
  );
}
