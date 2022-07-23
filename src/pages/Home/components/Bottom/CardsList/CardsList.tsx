import React, { useState } from "react";

import styles from "./CardsList.module.scss";
import { Card } from "./Card/Card";
import { GlobalSvgSelector } from "../../../../../images/GlobalSvgSelector";

interface ItemProps {
  id: number;
  day: string;
  date: string;
  icon_id: string;
  degrees: string;
  subDegrees: string;
  weatherType: string;
}

const items = [
  {
    id: 1,
    day: "Сегодня",
    date: "28 авг",
    icon_id: "sun",
    degrees: "+18",
    subDegrees: "+15",
    weatherType: "Облачно",
  },
  {
    id: 2,
    day: "Завтра",
    date: "29 авг",
    icon_id: "small_rain_sun",
    degrees: "+18",
    subDegrees: "+15",
    weatherType: "небольшой дождь и солнце",
  },
  {
    id: 3,
    day: "Ср",
    date: "30 авг",
    icon_id: "small_rain",
    degrees: "+18",
    subDegrees: "+15",
    weatherType: "небольшой дождь",
  },
  {
    id: 4,
    day: "Чт",
    date: "28 авг",
    icon_id: "mainly_cloudy",
    degrees: "+18",
    subDegrees: "+15",
    weatherType: "Облачно",
  },
  {
    id: 5,
    day: "Пт",
    date: "28 авг",
    icon_id: "rain",
    degrees: "+18",
    subDegrees: "+15",
    weatherType: "Облачно",
  },
  {
    id: 6,
    day: "Сб",
    date: "28 авг",
    icon_id: "sun",
    degrees: "+18",
    subDegrees: "+15",
    weatherType: "Облачно",
  },
  {
    id: 7,
    day: "Вс",
    date: "28 авг",
    icon_id: "sun",
    degrees: "+18",
    subDegrees: "+15",
    weatherType: "Облачно",
  },
];

export const CardsList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function changeFlagModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={styles.list}>
      {items.map((item: ItemProps) => (
        <Card
          key={item.id}
          day={item.day}
          date={item.date}
          degrees={item.degrees}
          subDegrees={item.degrees}
          weatherType={item.weatherType}
          isModalOpen={isModalOpen}
          changeFlagModalOpen={changeFlagModalOpen}
        >
          {<GlobalSvgSelector id={item.icon_id} />}
        </Card>
      ))}
    </div>
  );
};
