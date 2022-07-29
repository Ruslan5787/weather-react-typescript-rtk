import React, { useState } from "react";
import styles from "./Header.module.scss";

import { SearchIcon } from "../../images/shared/header";
import { useAppDispatch } from "../../hooks/redux";
import { userInfoSlice } from "../../store/reducers/UserInfoSlice";

export const SearchField = () => {
  const dispatch = useAppDispatch();
  const { setUserCity } = userInfoSlice.actions;
  const [fieldValue, setFieldValue] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFieldValue(event.target.value);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (fieldValue) {
      dispatch(setUserCity(fieldValue));
      setFieldValue("");
    }
  };

  return (
    <form className={styles.search_field} action="">
      <input
        className={styles.search_field_input}
        type="text"
        placeholder="Выбрать город"
        value={fieldValue}
        onChange={handleChange}
      />

      <button className={styles.search_field_button} onClick={handleClick}>
        <SearchIcon />
      </button>
    </form>
  );
};
