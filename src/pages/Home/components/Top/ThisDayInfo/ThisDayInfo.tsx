import React, {FC} from "react";

import {ThisDayInfoItem} from "./ThisDayInfoItem/ThisDayInfoItem";
import {GlobalSvgSelector} from "../../../../../images/GlobalSvgSelector";
import {IWeather} from "../../../../../store/types/Weather";
import {getPressureInMillimeters, getStateMercuryColumn, getWindDescription, getWindName,} from "../../../../helpers";

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
  const {weatherToday} = props;

  const windSpeed = Math.round(weatherToday.wind_speed);

  const items: IItem[] = [
    {
      id: 0,
      icon_id: "temperature",
      name: "Температура",
      value: `${Math.round(
        weatherToday.temperature
      )}° - ощущается как ${Math.round(weatherToday.feels_like)}°`,
    },
    {
      id: 1,
      icon_id: "pressure",
      name: "Давление",
      value: `${getPressureInMillimeters(
        weatherToday.pressure
      )} мм ртутного столба - ${getStateMercuryColumn(
        getPressureInMillimeters(weatherToday.pressure)
      )}`,
    },
    {
      id: 2,
      icon_id: "precipitation",
      name: "Осадки",
      value: weatherToday.description,
    },
    {
      id: 3,
      icon_id: "wind",
      name: "Ветер",
      value: `${windSpeed} м/с ${getWindName(
        weatherToday.wind_deg
      )} - ${getWindDescription(windSpeed)}
      `,
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
