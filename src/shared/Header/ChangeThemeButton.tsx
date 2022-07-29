import React, { FC, useEffect } from "react";

import styles from "./Header.module.scss";

import { ChangeThemeIcon } from "../../images/shared/header";

import { STORAGE } from "../../service/STORAGE";
import { changeCssVariablesForTheme } from "../../service/ChangeCssVariablesForTheme";

import { getWebsiteTheme } from "../../store/selectors/selectors";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { websiteThemeSlice } from "../../store/reducers/WebsiteThemeSlice";

export const ChangeThemeButton: FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getWebsiteTheme);
  const { switchTheme } = websiteThemeSlice.actions;

  useEffect(() => {
    changeCssVariablesForTheme(theme);
    STORAGE.setItem("webSiteTheme", theme);
  }, [theme]);

  function changeTheme() {
    dispatch(switchTheme());
  }

  return (
    <button className={styles.change_theme} onClick={changeTheme}>
      <ChangeThemeIcon />
    </button>
  );
};
