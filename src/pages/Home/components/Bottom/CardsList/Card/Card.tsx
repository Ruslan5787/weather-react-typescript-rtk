import React from "react";

import styles from "./Card.module.scss";
import { Modal } from "../../../../../../shared/Modal/Modal";

interface ItemProps {
  day: string;
  date: string;
  children: React.ReactNode;
  degrees: string;
  subDegrees: string;
  weatherType: string;
  isModalOpen: boolean;
  changeFlagModalOpen: () => void;
}

export const Card: React.FC<ItemProps> = (props) => {
  const {
    day,
    date,
    children,
    degrees,
    subDegrees,
    weatherType,
    isModalOpen,
    changeFlagModalOpen,
  } = props;

  return (
    <>
      {isModalOpen && <Modal changeFlagModalOpen={changeFlagModalOpen} />}
      <div className={styles.card} onClick={changeFlagModalOpen}>
        <span className={styles.day}>{day}</span>
        <span className={styles.date}>{date}</span>
        {children}
        <span className={styles.degrees}>{degrees}</span>
        <span className={styles.sub_degrees}>{subDegrees}</span>
        <span className={styles.weather_type}>{weatherType}</span>
      </div>
    </>
  );
};
