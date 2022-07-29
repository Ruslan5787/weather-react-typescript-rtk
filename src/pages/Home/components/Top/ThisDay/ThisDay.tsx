import React, { FC } from "react";

import styles from "./ThisDay.module.scss";

import {
  addZeroToLittleTime,
  getUserCityTime,
} from "../../../../../helpers/helpers";

import { IWeatherForDay } from "../../../../../types/Weather";

import { GlobalSvgSelector } from "../../../../../images/GlobalSvgSelector";

interface ThisDayProps {
  weatherToday: IWeatherForDay;
}

export const ThisDay: FC<ThisDayProps> = (props) => {
  const { weatherToday } = props;

  const cityTime = getUserCityTime(weatherToday?.timezone);
  const hoursAndMinutes = addZeroToLittleTime(
    cityTime.getHours(),
    cityTime.getMinutes()
  );

  return (
    <div className={styles.block}>
      <div className={styles.top}>
        <span className={styles.degrees}>
          {Math.round(weatherToday?.main.temp)}°
        </span>
        <span className={styles.day}>Сегодня</span>
      </div>
      <div className={styles.bottom}>
        <span className={styles.info}>
          <>Время: {hoursAndMinutes}</>
        </span>
        <span className={styles.info}>Город: {weatherToday?.name}</span>
      </div>
      <div className={styles.weather_picture}>
        <GlobalSvgSelector id={weatherToday?.weather[0].icon} />
      </div>
    </div>
  );
};
