import React from "react";
import { SearchNewsDev } from "./SearchNews";
import { CategoryNews } from "./CategoryNews";
import { SoccerApi } from "./ResultsSoccer";

function App() {
  return (
    <React.Fragment>
      <CategoryNews/>

      <SearchNewsDev/>
      <SoccerApi/>
    </React.Fragment>
  )
}

export { App }
