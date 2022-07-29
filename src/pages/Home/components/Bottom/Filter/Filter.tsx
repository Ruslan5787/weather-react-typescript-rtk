import React, { FC } from "react";

import styles from "./Filter.module.scss";

import { BUTTONS_VALUE } from "../../../../data";

import { Button } from "../../../../../shared/Button/Button";

interface FilterProps {
  activeFilter: number;
  setActiveFilter: (filter: number) => void;
}

export const Filter: FC<FilterProps> = (props) => {
  const { activeFilter, setActiveFilter } = props;

  return (
    <div className={styles.filter}>
      <div className={styles.wrapper}>
        {BUTTONS_VALUE.map((value, index) => (
          <Button
            key={Math.random()}
            value={value}
            accountButton={index}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        ))}
      </div>
    </div>
  );
};
