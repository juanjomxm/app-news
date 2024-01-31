import React from "react";
import axios from "axios";

function SearchNewsDev(){
    const [dataNews, setDataNews] = React.useState([])
    const [searchNews, setSearchNews] = React.useState('')

    // Axios para buscar las noticias que deseo
    const newsDev = axios.create({
        baseURL: 'https://newsapi.org/',
        params:{
            'apiKey': '5a03cee5e2594c8ea66e80860c45fbba',
            'q': searchNews,
            'language': 'es',
            'sortBy': 'publishedAt',
            'pageSize': 10
        }
    })

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

    // Axios para renderizar noticias desde el inicio
    const newsDevStart = axios.create({
        baseURL: 'https://newsapi.org/',
        params:{
            'apiKey': '5a03cee5e2594c8ea66e80860c45fbba',
            'q': 'guerra',
            'language': 'es',
            'sortBy': 'publishedAt',
            'pageSize': 10   
        }
    })

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