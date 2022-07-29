import React, { FC } from "react";

import styles from "./NotificationError.module.scss";
import { useAppDispatch } from "../../hooks/redux";
import { weatherForTodaySlice } from "../../store/reducers/WeatherForTodaySlice";

interface NotificationErrorProps {
  errorValue: string;
}

export const NotificationError: FC<NotificationErrorProps> = (props) => {
  const dispatch = useAppDispatch();
  const { resetErrorValue } = weatherForTodaySlice.actions;
  const { errorValue } = props;

  setTimeout(() => {
    dispatch(resetErrorValue());
  }, 1200);

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>{errorValue}</div>
    </div>
  );
};
