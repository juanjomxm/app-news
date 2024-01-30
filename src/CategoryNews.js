import React from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";

function CategoryNews(){
    const{
        filterCategory, 
        setFilterCategory
    } = React.useContext(GlobalContext)
    const [dataCategory, setDataCategory] = React.useState([])

    const categoryAxios = axios.create({
        baseURL: 'https://newsapi.org/',
        params:{
            'apiKey': '5a03cee5e2594c8ea66e80860c45fbba',
            'category': filterCategory,
            'country': 'co',
            'pageSize': 10
        }
    })

        React.useEffect(()=>{
            const viewCategory = async()=>{
                const {data, status} = await categoryAxios.get('v2/top-headlines/')
                try{
                    if(status === 200, 201){
                        setDataCategory(data.articles)
                    }
                }catch(error){
                    console.warn(error)
                }
            }
            viewCategory()
        }, [filterCategory])


    return(
        <div className="container-news-local">
            <h1>Noticias de Colombia</h1>

            <div className="container-buttons-category">
                <button onClick={()=>{
                    setFilterCategory('technology')
                }}>Tecnologia</button>
                <button onClick={()=>{
                    setFilterCategory('business')
                }}>Negocios</button>
                <button onClick={()=>{
                    setFilterCategory('sports')
                }}>Deportes</button>
                <button onClick={()=>{
                    setFilterCategory('science')
                }}>Ciencia</button>
                <button onClick={()=>{
                    setFilterCategory('health')
                }}>Salud</button>
            </div>

            {dataCategory.map((item, index) =>(
                <div key={index}>
                    <h3>{`${item.author}:`}</h3>
                    <p>{item.title}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">Leer noticia</a>
                </div>
            ))}
        </div>
    )
}

export { CategoryNews }