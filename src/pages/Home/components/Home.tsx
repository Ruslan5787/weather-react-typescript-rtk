import React, { FC } from "react";

import { Top } from "./Top/Top";
import { Bottom } from "./Bottom/Bottom";

export const Home: FC = () => {
  return (
    <div>
      <Top />
      <Bottom />
    </div>
  );
};
