import React from "react";

import { Filter } from "./Filter/Filter";
import { CardsList } from "./CardsList/CardsList";

export const Bottom: React.FC = () => {
  return (
    <div>
      <Filter />
      <CardsList />
    </div>
  );
};
