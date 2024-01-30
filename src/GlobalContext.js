import React from "react";

const GlobalContext = React.createContext()

function ContainerContext({children}){
    const [viewDataSoccer, setViewDataSoccer] = React.useState([])
    const [inputSearchResult, setInputSearchResult] = React.useState('')
    const [filterCategory, setFilterCategory] = React.useState('')

    const searchResult = viewDataSoccer.filter(item =>{
        return item.title.toLocaleLowerCase().includes(inputSearchResult.toLocaleLowerCase())
    })

    return(
       <GlobalContext.Provider value={{
        viewDataSoccer, 
        setViewDataSoccer,
        inputSearchResult, 
        setInputSearchResult,
        filterCategory, 
        setFilterCategory,
        searchResult
       }}>
            {children}
       </GlobalContext.Provider>
    )
}

export { GlobalContext }
export { ContainerContext }