import React, { FC, memo, ReactNode } from "react";

import styles from "./Modal.module.scss";

import { useAppSelector } from "../../hooks/redux";

import { IWeatherForDay } from "../../types/Weather";
import { getCityName } from "../../store/selectors/selectors";

import { CloseButton } from "./CloseButton";
import { ThisDayMainInfo } from "./ThisDayMainInfo";
import { ThisDayInfo } from "../../pages/Home/components/Top/ThisDayInfo/ThisDayInfo";

interface ModalProps {
  weatherForDay: IWeatherForDay;
  setIsModalOpen: (flag: boolean) => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = memo((props) => {
  const { weatherForDay, setIsModalOpen, children } = props;
  const cityName = useAppSelector(getCityName);

  function handleOutsideClick() {
    setIsModalOpen(false);
  }

  const handleClickInModal: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    event.stopPropagation();
  };

  function handleClickCloseBtn() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.modal_body} onClick={handleClickInModal}>
        <ThisDayMainInfo
          cityName={cityName}
          children={children}
          weatherForDay={weatherForDay}
        />

        <div className={styles.modal_right}>
          <ThisDayInfo weatherForDay={weatherForDay} />
        </div>

        <div className={styles.modal_close_btn}>
          <CloseButton changeActiveFlagModal={handleClickCloseBtn} />
        </div>
      </div>
    </div>
  );
});
