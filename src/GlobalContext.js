import React from "react";

const GlobalContext = React.createContext()

function ContainerContext({children}){
    return(
        <GlobalContext.Provider value={{

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext }
export { ContainerContext }