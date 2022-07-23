import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import { ChangeThemeLogo } from "../../images/header";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { websiteThemeSlice } from "../../store/reducers/WebsiteThemeSlice";

import { changeCssVariablesForTheme } from "../../model/ChangeCssVariablesForTheme";
import { Storage } from "../../model/Storage";

export function ChangeThemeButton() {
  const { switchTheme } = websiteThemeSlice.actions;
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.websiteTheme);

  useEffect(() => {
    changeCssVariablesForTheme(theme);
    Storage.setItem("webSiteTheme", theme);
  }, [theme]);

  function changeTheme() {
    dispatch(switchTheme());
  }

  return (
    <button className={styles.change_theme} onClick={changeTheme}>
      <ChangeThemeLogo />
    </button>
  );
}
