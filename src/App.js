import React from "react";
import { SearchNewsDev } from "./SearchNews";
import { CategoryNews } from "./CategoryNews";
import { SoccerApi } from "./ResultsSoccer";
import { GlobalContext } from "./GlobalContext";

function App() {
  const{
    filterCategory
  } = React.useContext(GlobalContext)

  return (
    <React.Fragment>
      <h1>Noticias del mundo</h1>
      <SearchNewsDev/>

      <h2>Noticias de Colombia</h2>
      <CategoryNews/>
      {(filterCategory === 'sports') && <SoccerApi/>}
    </React.Fragment>
  )
}

export { App }
