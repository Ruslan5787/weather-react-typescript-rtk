import React, { FC } from "react";

import { ThisDayInfoItem } from "./ThisDayInfoItem/ThisDayInfoItem";
import { GlobalSvgSelector } from "../../../../../images/GlobalSvgSelector";
import { IWeather } from "../../../../../store/types/Weather";
import {
  getPressureInMillimeters,
  getStateMercuryColumn,
} from "../../../../helpers";

export interface IItem {
  id: number;
  icon_id: string;
  name: string;
  value: string;
}

interface ThisDayInfoProps {
  weatherToday: IWeather;
}

export const ThisDayInfo: FC<ThisDayInfoProps> = (props) => {
  const { weatherToday } = props;

  const items: IItem[] = [
    {
      id: 0,
      icon_id: "temperature",
      name: "Temperature",
      value: `${weatherToday.temperature}° - feels like ${weatherToday.feels_like}°`,
    },
    {
      id: 1,
      icon_id: "pressure",
      name: "Pressure",
      value: `${getPressureInMillimeters(
        weatherToday.pressure
      )} mm of mercury - ${getStateMercuryColumn(
        getPressureInMillimeters(weatherToday.pressure)
      )}`,
    },
    {
      id: 2,
      icon_id: "precipitation",
      name: "Precipitation",
      value: weatherToday.description,
    },
    {
      id: 3,
      icon_id: "wind",
      name: "Wind",
      value: `${weatherToday.wind_speed} m/s юго-запад - легкий ветер`,
    },
  ];

  return (
    <>
      {items.map((item: IItem) => (
        <ThisDayInfoItem
          key={item.id}
          textName={item.name}
          textValue={item.value}
        >
          <GlobalSvgSelector id={item.icon_id} />
        </ThisDayInfoItem>
      ))}
    </>
  );
};
