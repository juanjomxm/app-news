import React from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { SoccerApi } from "./ResultsSoccer";

function CategoryNews(){
    const{

    } = React.useContext(GlobalContext)
    const [dataCategory, setDataCategory] = React.useState([])
    const [filterCategory, setFilterCategory] = React.useState('')

    const categoryAxios = axios.create({
        baseURL: 'https://newsapi.org/',
        params:{
            'apiKey': '5a03cee5e2594c8ea66e80860c45fbba',
            'category': filterCategory,
            'country': 'co',
            'pageSize': 20
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
        <div>

            <div className="container-buttons-category">
                <button onClick={()=>{
                    setFilterCategory('technology')
                }}>Tecnologia</button>
                <button onClick={()=>{
                    setFilterCategory('business')
                }}>Negocios</button>
                <button onClick={()=>{
                    if(setFilterCategory('sports')){
                        <SoccerApi/>
                    }
                }}>Deportes</button>
                <button onClick={()=>{
                    setFilterCategory('science')
                }}>Ciencia</button>
                <button onClick={()=>{
                    setFilterCategory('health')
                }}>Salud</button>
                <button onClick={()=>{
                    setFilterCategory('entertainment')
                }}>Entretenimiento</button>
            </div>

            {dataCategory.map((item, index) =>(
                <div key={index}>
                    <h3>{`${item.author}:`}</h3>
                    <p>{item.title}</p>
                    <a href={item.url}>Leer noticia</a>
                </div>
            ))}
        </div>
    )
}

export { CategoryNews }