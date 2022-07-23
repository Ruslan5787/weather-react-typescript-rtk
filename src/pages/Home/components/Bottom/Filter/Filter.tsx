import React from "react";

import styles from "./Filter.module.scss";

import { Button } from "./Button/Button";

export const Filter: React.FC = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.wrapper}>
        <Button text="На неделю" />
        <Button text="На 10 дней" />
        <Button text="На месяц" />
      </div>
      <div className={styles.wrapper}>
        <Button text="Отменить" />
      </div>
    </div>
  );
};
