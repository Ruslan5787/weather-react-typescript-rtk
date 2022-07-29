import React, { FC } from "react";

import styles from "./Header.module.scss";

import { HeaderLogo } from "../../images/shared/header";

import { HeaderRight } from "./HeaderRight";
import { NotificationError } from "../ErrorNotification/NotificationError";
import { useAppSelector } from "../../hooks/redux";
import { getNotificationValue } from "../../store/selectors/selectors";

export const Header: FC = () => {
  const notificationValue = useAppSelector(getNotificationValue);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <HeaderLogo className={styles.logo} />
        <h1 className={styles.title}>Weather</h1>
      </div>

      {notificationValue && (
        <NotificationError errorValue={notificationValue} />
      )}

      <HeaderRight />
    </header>
  );
};
