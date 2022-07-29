import React, { FC } from "react";

import { Home } from "./pages/Home/components/Home";
import { Header } from "./shared/Header/Header";

export const App: FC = () => {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
};
