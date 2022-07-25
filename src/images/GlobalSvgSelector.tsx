import React from "react";

import {MainlyCloudyIcon, SmallRainSunIcon, SunIcon,} from "../images/weatherPictures";
import {CloseIcon, PrecipitationIcon, PressureIcon, TemperatureIcon, WindIcon,} from "./shared";
import {FewCloudsIcon, FogIcon, ScatteredCloudsIcon, SnowIcon, ThunderstormIcon,} from "./weatherPictures";

interface Props {
  id: string;
}

export const GlobalSvgSelector = (props: Props) => {
  const {id} = props;

  switch (id) {
    case "01d":
      return <SunIcon/>;
    case "02d":
      return <FewCloudsIcon/>;
    case "03d":
      return <ScatteredCloudsIcon/>;
    case "04d":
      return <MainlyCloudyIcon/>;
    case "10d":
      return <SmallRainSunIcon/>;
    case "11d":
      return <ThunderstormIcon/>;
    case " 13d":
      return <SnowIcon/>;
    case "50d":
      return <FogIcon/>;

    //----------------------------------

    case "temperature":
      return <TemperatureIcon/>;
    case "pressure":
      return <PressureIcon/>;
    case "precipitation":
      return <PrecipitationIcon/>;
    case "wind":
      return <WindIcon />;

    //----------------------------------

    case "close":
      return <CloseIcon />;

    default:
      return null;
  }
};
