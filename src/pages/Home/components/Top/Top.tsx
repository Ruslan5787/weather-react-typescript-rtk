import React, { useEffect } from "react";
import styles from "./Top.module.scss";

import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { fetchWeather } from "../../../../store/ActionCreators";

export const Top: React.FC = () => {
  const dispatch = useAppDispatch();
  const weatherToday = useAppSelector(
    (state) => state.weatherForecast.weather.today
  );
  const userCity = useAppSelector((state) => state.userCity.userCity);

  useEffect(() => {
    dispatch(fetchWeather(userCity));
  }, [userCity]);

  return (
    <div className={styles.wrapper}>
      <ThisDay weatherToday={weatherToday} />
      <div className={styles.this_day_info}>
        <ThisDayInfo weatherToday={weatherToday} />
      </div>
    </div>
  );
};
