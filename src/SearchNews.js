import React from "react";
import { GlobalContext } from "./GlobalContext";

function SearchNewsDev(){
    const{
        searchNews,
        setSearchNews,
        newsDevStart,
        newsDev
    } = React.useContext(GlobalContext)

    const [dataNews, setDataNews] = React.useState([])

    // Funcion para que se renderice solo cuando busco una noticia
    const viweNewsDev = async()=>{
        try{
            const {data, status} = await newsDev.get('v2/everything') 
            if(status === 200, 201){
                setDataNews(data.articles)
            }
        }catch(error){
            console.warn(error)
        }
    }

    // De esta manera puedo renderizar noticias de inmediato para que la pagina no este en lanco y despues que el usuario busque lo que desea
    React.useEffect(()=>{
        const viweNewsDevStart = async()=>{
            try{
                const {data, status} = await newsDevStart.get('v2/everything') 
                if(status === 200, 201){
                    setDataNews(data.articles)
                }
            }catch(error){
                console.warn(error)
            }
        }
        viweNewsDevStart()
    }, [])


    return(
        <div className="container-news-world">
            <div className="contianer-title-news-world">
                <h1>Noticias del mundo</h1>
                <input
                placeholder="Buscar noticia"
                value={searchNews}
                onChange={(event)=>{
                    setSearchNews(event.target.value)
                }}
                />
                <button
                onClick={viweNewsDev}
                >Buscar</button>
            </div>
            
            {dataNews.map((item, index)=>(
                <div 
                className="container-news-article-world"
                key={index}>
                    <h2>{item.title}</h2>
                    <div className="container-image-and-article-news-world">
                        <img
                        src={item.urlToImage}
                        width={200}
                        height={200}
                        />
                        <article>{item.description}</article>
                    </div>
                    <a 
                    className="url-news-world"
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer">Leer noticia</a>
                </div>
            ))}
        </div>
    )
}

export { SearchNewsDev }