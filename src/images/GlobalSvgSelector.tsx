import React from "react";

import {
  CloseIcon,
  PrecipitationIcon,
  PressureIcon,
  TemperatureIcon,
  WindIcon,
} from "./shared";
import {
  FewCloudsDayIcon,
  FewCloudsNightIcon,
  FogIcon,
  MainlyCloudyIcon,
  MoonIcon,
  RainDayIcon,
  RainNightIcon,
  ScatteredCloudsIcon,
  ShowerRainIcon,
  SnowIcon,
  SunIcon,
  ThunderstormIcon,
} from "./home/weatherPictures";

interface Props {
  id: string;
}

export const GlobalSvgSelector = (props: Props) => {
  const { id } = props;

  switch (id) {
    case "01d":
      return <SunIcon />;
    case "01n":
      return <MoonIcon />;

    case "02d":
      return <FewCloudsDayIcon />;
    case "02n":
      return <FewCloudsNightIcon />;

    case "03d":
    case "03n":
      return <ScatteredCloudsIcon />;

    case "04d":
    case "04n":
      return <MainlyCloudyIcon />;

    case "09d":
    case "09n":
      return <ShowerRainIcon />;

    case "10d":
      return <RainDayIcon />;
    case "10n":
      return <RainNightIcon />;

    case "11d":
    case "11n":
      return <ThunderstormIcon />;

    case "13d":
    case "13n":
      return <SnowIcon />;

    case "50d":
    case "50n":
      return <FogIcon />;

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
};
