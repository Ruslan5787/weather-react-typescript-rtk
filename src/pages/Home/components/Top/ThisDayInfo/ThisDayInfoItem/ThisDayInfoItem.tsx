import React, { FC } from "react";

import styles from "./ThisDayInfoItem.module.scss";

interface ThisDayInfoItemProps {
  children: React.ReactNode;
  textName: string;
  textValue: string;
}

export const ThisDayInfoItem: FC<ThisDayInfoItemProps> = (props) => {
  const { children, textName, textValue } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item_img}>{children}</div>
      <span className={styles.item_type}>{textName}</span>
      <p className={styles.item_info}>{textValue}</p>
    </div>
  );
};
