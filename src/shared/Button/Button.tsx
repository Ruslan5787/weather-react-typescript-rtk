import React, { FC } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  value: string;
  accountButton: number;
  activeFilter: number;
  setActiveFilter: (filterType: number) => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { value, accountButton, activeFilter, setActiveFilter } = props;
  const isButtonActive = activeFilter === accountButton ? styles.active : "";

  const handleClick = () => {
    setActiveFilter(accountButton);
  };

  return (
    <button
      className={styles.button + " " + isButtonActive}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};
