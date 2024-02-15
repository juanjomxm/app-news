import React from "react";
import axios from "axios";

function CategoryNews(){
    const [dataCategory, setDataCategory] = React.useState([])
    const [inputSearchNewsLocal, setInputSearchNewsLocal] = React.useState('')

    //Axios para que las  noticias se rendericen desde el inicio

    const categoryAxiosRender = axios.create({
        baseURL: `https://api.currentsapi.services/v1/search/`,
        params:{
            'language': 'es',
            'keywords': 'guerra',
            'apiKey': 'LznzhCZ5RDq1dOY0DMG5PjIkvnVQoEA-QmmSzECMmga95O3x',
            'page_size': 15,
            'limit': 15
        },
        headers:{
            'Content-Type':' application/json'
        }
    })

    React.useEffect(()=>{
        const viewCategoryRender = async()=>{
            const {data,status} = await categoryAxiosRender.get()
    
            try{
                if(status === 200 || status === 201){
                    setDataCategory(data.news)
                }
            }catch(error){
                console.warn(error)
            }
        }
        viewCategoryRender()
    }, [])

    // Axios para las noticas de busqueda
    const categoryAxios = axios.create({
        baseURL: `https://api.currentsapi.services/v1/search/`,
        params:{
            'keywords': inputSearchNewsLocal,
            'language': 'es',
            'apiKey': 'LznzhCZ5RDq1dOY0DMG5PjIkvnVQoEA-QmmSzECMmga95O3x',
            'page_size': 15,
            'limit': 15
        },
        headers:{
            'Content-Type':' application/json'
        }
    })

    const viewCategory = async()=>{
        const {data,status} = await categoryAxios.get()

        try{
            if(status === 200 || status === 201){
                console.log(data.news)
                setDataCategory(data.news)
            }
        }catch(error){
            console.warn(error)
        }
    }

    // const searchNewsLocal = dataCategory.filter(item =>{
    //     return item.title.toLocaleLowerCase().includes(inputSearchNewsLocal.toLocaleLowerCase())
    // })

    return(
        <div className="container-news-local">

            <div className="container-search-news-local">
                <h1>Buscar noticias</h1>
                <input
                className="search-news-local"
                placeholder="Buscar noticia"
                value={inputSearchNewsLocal}
                onChange={(event)=>{
                    setInputSearchNewsLocal(event.target.value)
                }}
                />
                <button
                onClick={viewCategory}
                >Buscar</button>
            </div>

            <div className="container-all-news-local">
                {dataCategory.map((item, index) =>(
                    <div className="container-data-category" key={index}>
                       <h3>{item.title}</h3>
                        <img
                        src={item.image}
                        width={200}
                        height={200}
                        />
                        <article>{item.description}</article>
                        <a href={item.url} target="">Leer noticia</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { CategoryNews }