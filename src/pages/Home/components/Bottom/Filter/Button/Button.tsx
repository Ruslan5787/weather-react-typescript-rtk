import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { text } = props;
  return <button className={styles.button}>{text}</button>;
};
