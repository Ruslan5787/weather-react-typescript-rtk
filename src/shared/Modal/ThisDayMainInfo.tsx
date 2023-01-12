import React, { FC, ReactNode } from "react";

import styles from "./Modal.module.scss";

import { getDate, getTime } from "../../helpers/helpers";
import { IWeatherForDay } from "../../types/Weather";

interface ThisDayMainInfoProps {
  cityName: string;
  children: ReactNode;
  weatherForDay: IWeatherForDay;
}

export const ThisDayMainInfo: FC<ThisDayMainInfoProps> = (props) => {
  const { cityName, children, weatherForDay } = props;
  return (
    <div className={styles.modal_left}>
      <span className={styles.modal_degrees}>
        {Math.round(weatherForDay.main.temp)}°
      </span>
      <span className={styles.modal_day}>{getDate(weatherForDay.dt_txt)}</span>
      <div className={styles.modal_weather_picture}>{children}</div>
      <div className={styles.modal_bottom_info}>
        <span className={styles.modal_time}>
          Время: {getTime(weatherForDay.dt_txt)}
        </span>
        <span className={styles.modal_city}>Город: {cityName}</span>
      </div>
    </div>
  );
};
