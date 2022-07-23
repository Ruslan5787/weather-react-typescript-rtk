import React from "react";

import {
  RainIcon,
  SmallRainSunIcon,
  SmallRainIcon,
  SunIcon,
  MainlyCloudyIcon,
} from "../images/weatherPictures";
import {
  TemperatureIcon,
  PressureIcon,
  PrecipitationIcon,
  WindIcon,
  CloseIcon,
} from "./shared";

interface Props {
  id: string;
}

export const GlobalSvgSelector = (props: Props) => {
  const { id } = props;

  switch (id) {
    case "small_rain_sun":
      return <SmallRainSunIcon />;
    case "mainly_cloudy":
      return <MainlyCloudyIcon />;
    case "small_rain":
      return <SmallRainIcon />;
    case "rain":
      return <RainIcon />;
    case "sun":
      return <SunIcon />;

    //----------------------------------

    case "temperature":
      return <TemperatureIcon />;
    case "pressure":
      return <PressureIcon />;
    case "precipitation":
      return <PrecipitationIcon />;
    case "wind":
      return <WindIcon />;

    //----------------------------------

    case "close":
      return <CloseIcon />;

    default:
      return null;
  }

  return null;
};
