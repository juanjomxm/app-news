import React from "react";
import { SearchNewsDev } from "./SearchNews";
import { CategoryNews } from "./CategoryNews";
import { SoccerApi } from "./ResultsSoccer";
import { GlobalContext } from "./GlobalContext";

function App() {
  const{
    searchResult
  } = React.useContext(GlobalContext)

  return (
    <React.Fragment>
      <CategoryNews/>

      <SearchNewsDev/>
      <SoccerApi/>
    </React.Fragment>
  )
}

export { App }
