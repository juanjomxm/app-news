import React from "react";
import { SearchNewsDev} from "./NewsWorld"
import { CategoryNews } from "./NewsLocal";
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
