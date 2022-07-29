import React, { FC, useEffect } from "react";

import styles from "./Top.module.scss";

import {
  getCityName,
  getIsLoadingWeatherToday,
  getWeatherToday,
} from "../../../../store/selectors/selectors";
import { fetchWeatherForToday } from "../../../../store/ActionCreators";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { LoadingThisDay } from "./ThisDay/LoadingThisDay";
import { LoadingThisDayInfo } from "./ThisDayInfo/LoadingThisDayInfo";
import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";

export const Top: FC = () => {
  const dispatch = useAppDispatch();
  const userCity = useAppSelector(getCityName);
  const weatherToday = useAppSelector(getWeatherToday);
  const isLoading = useAppSelector(getIsLoadingWeatherToday);

  useEffect(() => {
    dispatch(fetchWeatherForToday(userCity));
  }, [userCity]);

  return (
    <div className={styles.wrapper}>
      {isLoading ? <LoadingThisDay /> : <ThisDay weatherToday={weatherToday} />}

      {isLoading ? (
        <LoadingThisDayInfo />
      ) : (
        <div className={styles.this_day_info}>
          <ThisDayInfo weatherForDay={weatherToday} />{" "}
        </div>
      )}
    </div>
  );
};
