import React from "react";

import { Home } from "./pages/Home/components/Home";
import { Header } from "./shared/Header/Header";

export const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
};
