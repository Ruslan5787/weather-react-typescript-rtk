import React, { FC, memo, ReactNode } from "react";

import styles from "./Card.module.scss";

import { Modal } from "../../../../../../shared/Modal/Modal";
import { IWeatherForDay } from "../../../../../../types/Weather";
import { getDate, getTime } from "../../../../../../helpers/helpers";

interface CardProps {
  weatherForDay: IWeatherForDay;
  isModalOpen: boolean;
  setIsModalOpen: (flag: boolean) => void;
  setModalForClickedCard: (id: number) => void;
  isModalForClickedCard: boolean;
  children: ReactNode;
}

export const Card: FC<CardProps> = memo((props) => {
  const {
    weatherForDay,
    isModalOpen,
    setIsModalOpen,
    setModalForClickedCard,
    isModalForClickedCard,
    children,
  } = props;

  function handleClick() {
    setIsModalOpen(true);
    setModalForClickedCard(weatherForDay.dt);
  }

  return (
    <>
      {isModalOpen && isModalForClickedCard ? (
        <Modal
          weatherForDay={weatherForDay}
          setIsModalOpen={() => setIsModalOpen(false)}
          children={children}
        />
      ) : null}

      <div className={styles.card} onClick={handleClick}>
        <span className={styles.date}>{getDate(weatherForDay.dt_txt)}</span>
        <span className={styles.time}>{getTime(weatherForDay.dt_txt)}</span>
        <div className={styles.image}>{children}</div>
        <span className={styles.degrees}>
          {Math.round(weatherForDay.main.temp)}°
        </span>
        <span className={styles.sub_degrees}>
          {Math.round(weatherForDay.main.feels_like)}°
        </span>
        <span className={styles.weather_type}>
          {weatherForDay.weather[0].description}
        </span>
      </div>
    </>
  );
});
