import React from "react";
import { SearchNewsDev} from "./NewsWorld"
import { CategoryNews } from "./NewsLocal";
import { SoccerApi } from "./ResultsSoccer";

function App() {
  return (
    <React.Fragment>
      <SearchNewsDev/>

      <CategoryNews/>

      <SoccerApi/>
    </React.Fragment>
  )
} // Lastimosamente para poder visualizar esta app cuando la desplego tengo que pagar el plan de los desarrolladores de la api de noticias, solo funciona la api de los resultados de futbol

export { App }
