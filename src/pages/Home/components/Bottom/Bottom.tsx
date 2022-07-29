import React, { FC, useState } from "react";

import { Filter } from "./Filter/Filter";
import { CardsList } from "./CardsList/CardsList";

export const Bottom: FC = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0);

  return (
    <div>
      <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <CardsList activeFilter={activeFilter} />
    </div>
  );
};
