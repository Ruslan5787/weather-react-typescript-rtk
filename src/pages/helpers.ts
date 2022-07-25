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
  } else if (windForce === 2) {
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
    return "север";
  } else if (degrees > 0 && degrees < 90) {
    return "северо-восток";
  } else if (degrees === 90) {
    return "восток";
  } else if (degrees > 90 && degrees < 180) {
    return "юго-восток";
  } else if (degrees === 180) {
    return "юг";
  } else if (degrees > 180 && degrees < 270) {
    return "юго-запад";
  } else if (degrees === 270) {
    return "запад";
  } else if (degrees > 270 && degrees < 360) {
    return "северо-запад";
  }
}
