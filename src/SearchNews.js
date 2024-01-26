import React from "react";
import axios from "axios";



function SearchNewsDev(){
    const [dataNews, setDataNews] = React.useState([])
    const [searchNews, setSearchNews] = React.useState('')

    // Una buena API para crear la app, en github aparece como News
    const newsDev = axios.create({
        baseURL: 'https://newsapi.org/v2/everything?apiKey=5a03cee5e2594c8ea66e80860c45fbba',
        params:{
            'q': searchNews,
            'language': 'es',
            'pageSize': 20
        }
    })

    const viweNewsDev = async()=>{
        try{
            const {data, status} = await newsDev.get() 
            if(status === 200, 201){
                console.log(data.articles)
                setDataNews(data.articles)
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div>
            <input
            value={searchNews}
            onChange={(event)=>{
                setSearchNews(event.target.value)
            }}
            />
            <button
            onClick={viweNewsDev}
            >La noticia</button>
            
            {dataNews.map((item, index)=>(
                <div key={index}>
                    <h2>{item.title}</h2>
                    <img
                    src={item.urlToImage}
                    width={300}
                    height={300}
                    />
                    <article>{item.description}</article>
                </div>
            ))}
        </div>
    )
}

export { SearchNewsDev }