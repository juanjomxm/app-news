import React from "react";
import axios from "axios";

const GlobalContext = React.createContext()

function ContainerContext({children}){
    const [filterCategory, setFilterCategory] = React.useState('')
    const [inputSearchNewsLocal, setInputSearchNewsLocal] = React.useState('')
    const [searchNews, setSearchNews] = React.useState('')

    // Axios para noticias locales
    const categoryAxios = axios.create({
        baseURL: `https://newsapi.org/v2/top-headlines/?apiKey=5a03cee5e2594c8ea66e80860c45fbba&q=${inputSearchNewsLocal}&category=${filterCategory}&country=co&pageSize=10`,
        // params:{
        //     'apiKey': '5a03cee5e2594c8ea66e80860c45fbba',
        //     'q': inputSearchNewsLocal,
        //     'category': filterCategory,
        //     'country': 'co',
        //     'pageSize': 10
        // }
    })

    // Axios para buscar las noticias que deseo
    const newsDev = axios.create({
        baseURL: 'https://newsapi.org/v2/everything/',
        params:{
            'apiKey': '5a03cee5e2594c8ea66e80860c45fbba',
            'q': searchNews,
            'language': 'es',
            'sortBy': 'publishedAt',
            'pageSize': 10
        }
    })

    // Axios para renderizar noticias desde el inicio
    const newsDevStart = axios.create({
        baseURL: 'https://newsapi.org/v2/everything/',
        params:{
            'apiKey': '5a03cee5e2594c8ea66e80860c45fbba',
            'q': 'guerra',
            'language': 'es',
            'sortBy': 'publishedAt',
            'pageSize': 10   
        }
    })

    return(
        <GlobalContext.Provider value={{
            filterCategory,
            setFilterCategory,
            inputSearchNewsLocal,
            setInputSearchNewsLocal,
            categoryAxios,

            searchNews,
            setSearchNews,
            newsDevStart,
            newsDev
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext }
export { ContainerContext }