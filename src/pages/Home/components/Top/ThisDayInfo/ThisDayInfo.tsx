import React, { FC } from "react";

import { getThisDayInfoItemsData } from "../../../../../helpers/helpers";

import { IWeatherForDay } from "../../../../../types/Weather";

import { IThisDayInfoItem } from "../../../../../types/Home";

import { ThisDayInfoItem } from "./ThisDayInfoItem/ThisDayInfoItem";
import { GlobalSvgSelector } from "../../../../../images/GlobalSvgSelector";

interface ThisDayInfoProps {
  weatherForDay: IWeatherForDay;
}

export const ThisDayInfo: FC<ThisDayInfoProps> = (props) => {
  const { weatherForDay } = props;
  const items: IThisDayInfoItem[] = getThisDayInfoItemsData(weatherForDay);

  return (
    <>
      {items.map((item: IThisDayInfoItem) => (
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
