import React from "react";
import { SearchNewsDev } from "./SearchNews";
import { CategoryNews } from "./CategoryNews";
import { SoccerApi } from "./ResultsSoccer";
import { GlobalContext } from "./GlobalContext";

function App() {
  // const{
    
  // } = React.useContext(GlobalContext)

  return (
    <React.Fragment>
      <h1>Noticias nacionales e internacionales</h1>
      <SearchNewsDev/>

      <h2>Colombia</h2>
      <CategoryNews/>
      {/* <SoccerApi/> */}
    </React.Fragment>
  )
}

export { App }
