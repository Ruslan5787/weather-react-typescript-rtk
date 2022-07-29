import { ARRAY_MONTHS } from "../pages/data";
import { IWeatherForDay } from "../types/Weather";

export function getUserCityTime(timezon: number) {
  const nowDate = new Date();
  const localTime = nowDate.getTime();
  const localOffset = nowDate.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const userCityTime = utc + 1000 * timezon;

  return new Date(userCityTime);
}

export function addZeroToLittleTime(hours: number, minutes: number) {
  if (hours < 10) {
    return `0${hours}:${minutes}`;
  } else if (minutes < 10) {
    return `${hours}:0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

export function getStateMercuryColumn(pressure: number) {
  if (pressure < 750) {
    return "низкое";
  } else if (pressure > 770) {
    return "высокое";
  }

  return "нормальное";
}

export function getPressureInMillimeters(pressure: number) {
  const hectopascalInMillimeters = 0.750063755419211;

  return Math.round(pressure * hectopascalInMillimeters);
}

export function getWindDescription(windForce: number) {
  if (windForce === 0) {
    return "штиль";
  } else if (windForce === 1 || windForce === 2) {
    return "легкий ветер";
  } else if (windForce >= 3 && windForce <= 5) {
    return "слабый ветер";
  } else if (windForce >= 5 && windForce <= 7) {
    return "умеренный ветер";
  } else if (windForce >= 7 && windForce <= 15) {
    return "сильный ветер";
  } else if (windForce >= 15 && windForce <= 29) {
    return "шторм";
  } else if (windForce >= 30) {
    return "ураган";
  }
}

export function getWindName(degrees: number) {
  if (degrees === 0 || degrees === 360) {
    return "северный";
  } else if (degrees > 0 && degrees < 90) {
    return "северо-восточный";
  } else if (degrees === 90) {
    return "восточный";
  } else if (degrees > 90 && degrees < 180) {
    return "юго-восточный";
  } else if (degrees === 180) {
    return "южный";
  } else if (degrees > 180 && degrees < 270) {
    return "юго-западный";
  } else if (degrees === 270) {
    return "западный";
  } else if (degrees > 270 && degrees < 360) {
    return "северо-западный";
  }
}

export function getThisDayInfoItemsData(weatherInfo: IWeatherForDay) {
  const windSpeed = Math.round(weatherInfo?.wind.speed);

  return [
    {
      id: 0,
      icon_id: "temperature",
      name: "Температура",
      value: `${Math.round(
        weatherInfo?.main.temp
      )}° - ощущается как ${Math.round(weatherInfo?.main.feels_like)}°`,
    },
    {
      id: 1,
      icon_id: "pressure",
      name: "Давление",
      value: `${getPressureInMillimeters(
        weatherInfo?.main.pressure
      )} мм ртутного столба - ${getStateMercuryColumn(
        getPressureInMillimeters(weatherInfo?.main.pressure)
      )}`,
    },
    {
      id: 2,
      icon_id: "precipitation",
      name: "Осадки",
      value: weatherInfo?.weather[0].description,
    },
    {
      id: 3,
      icon_id: "wind",
      name: "Ветер",
      value: `${windSpeed} м/с ${getWindName(
        weatherInfo?.wind.deg
      )} - ${getWindDescription(windSpeed)}
      `,
    },
  ];
}

export function getDate(date: string) {
  return `${new Date(date).getDate()} ${
    ARRAY_MONTHS[new Date(date).getMonth()]
  }`;
}

export function getTime(date: string) {
  return date.slice(10, 16);
}

export function getFilteredForecastForDays(forecast: IWeatherForDay[]) {
  const filteredForecastForDays: IWeatherForDay[][] = [[], [], [], [], [], []];
  let day = new Date(forecast[0]?.dt_txt).getDate();
  let count = 0;

  forecast.forEach((item) => {
    if (day === new Date(item?.dt_txt).getDate()) {
      filteredForecastForDays[count].push(item);
    } else {
      day = new Date(item?.dt_txt).getDate();
      count += 1;
      filteredForecastForDays[count].push(item);
    }
  });

  return filteredForecastForDays;
}
