import React from "react";
import axios from "axios";

function SearchNewsDev(){
    const [dataNews, setDataNews] = React.useState([])

    // Axios para renderizar noticias desde el inicio
    const newsDevStart = axios.create({
        baseURL: 'https://api.currentsapi.services/v1/latest-news/',
        params:{
            'apiKey': 'LznzhCZ5RDq1dOY0DMG5PjIkvnVQoEA-QmmSzECMmga95O3x',
            'language': 'es',
            'page_size': 15
        },
        headers:{
            'Content-Type':' application/json'
        }
    })

    // De esta manera puedo renderizar noticias de inmediato para que la pagina no este en blanco y despues que el usuario busque lo que desea
    React.useEffect(()=>{
        const viweNewsDevStart = async()=>{
            const {data,status} = await newsDevStart.get()

            try{
                if(status === 200, 201){
                    setDataNews(data.news)
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
            </div>
            
            <div className="container-data-news-world">
                {dataNews.map((item, index)=>(
                    <div className="container-news-article-world" key={index}>
                        <h3>{item.title}</h3>
                        <img
                        src={item.image}
                        width={200}
                        height={200}
                        />
                        <article>{item.description}</article>
                        <a href={item.url} target="_blank">Leer noticia</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { SearchNewsDev }