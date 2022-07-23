import React, { useState } from "react";
import styles from "./Header.module.scss";

import { ReactComponent as SearchIcon } from "../../images/header/search.svg";
import { useAppDispatch } from "../../hooks/redux";
import { userCitySlice } from "../../store/reducers/UserCitySlice";

export function HeaderSearchField() {
  const [fieldValue, setFieldValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const { setUserCity } = userCitySlice.actions;

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
}
