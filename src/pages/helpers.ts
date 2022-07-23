import { logDOM } from "@testing-library/react";

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
  if (pressure < 740) {
    return "low";
  } else if (pressure > 780) {
    return "high";
  }
  return "normal";
}

export function getPressureInMillimeters(pressure: number) {
  const hectopascalInMillimeters = 0.750063755419211;
  return Math.round(pressure * hectopascalInMillimeters);
}
