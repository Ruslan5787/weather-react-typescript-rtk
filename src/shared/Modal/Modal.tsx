import React, { FC } from "react";

import styles from "./Modal.module.scss";
import { GlobalSvgSelector } from "../../images/GlobalSvgSelector";

import {
  IItem,
  ThisDayInfo,
} from "../../pages/Home/components/Top/ThisDayInfo/ThisDayInfo";

// const items: IItem[] = [
//   {
//     id: 0,
//     icon_id: "temperature",
//     name: "Температура",
//     value: "20° - ощущается как 17°",
//   },
//   {
//     id: 1,
//     icon_id: "pressure",
//     name: "Давление",
//     value: "765 мм ртутного столба - нормальное",
//   },
//   {
//     id: 2,
//     icon_id: "precipitation",
//     name: "Осадки",
//     value: "Без осадков",
//   },
//   {
//     id: 3,
//     icon_id: "wind",
//     name: "Ветер",
//     value: "3 м/с юго-запад - легкий ветер",
//   },
// ];
interface IModalProps {
  changeFlagModalOpen: () => void;
}
export const Modal: FC<IModalProps> = (props) => {
  const { changeFlagModalOpen } = props;

  return (
    <div className={styles.modal}>
      <div className={styles.modal_container}>
        <div className={styles.modal_body}>
          <div className={styles.modal_left}>
            <span className={styles.modal_degrees}>12°</span>
            <span className={styles.modal_day}>Среда</span>
            <GlobalSvgSelector id="small_rain_sun" />

            <div className={styles.modal_bottom_info}>
              <span className={styles.modal_time}>Время: 01:54</span>
              <span className={styles.modal_city}>Город: Санкт-Петербург</span>
            </div>
          </div>

          <div className={styles.modal_right}>{/*<ThisDayInfo />*/}</div>

          <button className={styles.btn_close} onClick={changeFlagModalOpen}>
            <GlobalSvgSelector id="close" />
          </button>
        </div>
      </div>
    </div>
  );
};
