import React, {FC} from "react";

import styles from "./ThisDay.module.scss";
import {ReactComponent as SunLogo} from "../../../../../images/weatherPictures/sun.svg";
import {IWeather} from "../../../../../store/types/Weather";
import {addZeroToLittleTime, getUserCityTime} from "../../../../helpers";
import {getHours, getMinutes} from "date-fns";

interface ThisDayProps {
  weatherToday: IWeather;
}

export const ThisDay: FC<ThisDayProps> = (props) => {
  const {weatherToday} = props;

  const cityTime = getUserCityTime(weatherToday.timezone);
  const hoursAndMinutes = addZeroToLittleTime(
    getHours(cityTime),
    getMinutes(cityTime)
  );

  return (
    <div className={styles.block}>
      <div className={styles.top}>
        <span className={styles.degrees}>
          {Math.round(weatherToday.temperature)}°
        </span>
        <span className={styles.day}>Сегодня</span>
      </div>

      <div className={styles.bottom}>
        <span className={styles.info}>
          <>Время: {hoursAndMinutes}</>
        </span>
        <span className={styles.info}>Город: {weatherToday.city_name}</span>
      </div>

      <SunLogo className={styles.weather_picture} />
    </div>
  );
};
