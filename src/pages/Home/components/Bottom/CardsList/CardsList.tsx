import React, { FC, memo, useEffect, useState } from "react";

import styles from "./CardsList.module.scss";

import { GlobalSvgSelector } from "../../../../../images/GlobalSvgSelector";

import {
  getCityName,
  getIsLoadingForecast,
  getWeatherForecast,
} from "../../../../../store/selectors/selectors";
import { fetchForecast } from "../../../../../store/ActionCreators";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";

import { IWeatherForDay } from "../../../../../types/Weather";
import { Card } from "./Card/Card";
import { LoadingCard } from "./Card/LoadingCard";

interface CardsListProps {
  activeFilter: number;
}

export const CardsList: FC<CardsListProps> = memo((props) => {
  const dispatch = useAppDispatch();
  const userCity = useAppSelector(getCityName);
  const forecast = useAppSelector(getWeatherForecast);

  const { activeFilter } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedCardId, setClickedCardId] = useState<number>(0);
  const isLoading = useAppSelector(getIsLoadingForecast);

  useEffect(() => {
    dispatch(fetchForecast(userCity));
  }, [userCity]);

  function clickForCard(id: number) {
    setClickedCardId(id);
  }

  const loadingCardsList = Array(7)
    .fill(0)
    .map(() => <LoadingCard key={Math.random()} />);

  const cardsList = forecast[activeFilter]?.map((item: IWeatherForDay) => (
    <Card
      key={item?.dt}
      weatherForDay={item}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      setModalForClickedCard={clickForCard}
      // I use weather dt how id for card
      isModalForClickedCard={clickedCardId === item?.dt}
    >
      <GlobalSvgSelector id={item.weather[0].icon} />
    </Card>
  ));

  return (
    <div className={styles.list}>
      {isLoading ? loadingCardsList : cardsList}
    </div>
  );
});
