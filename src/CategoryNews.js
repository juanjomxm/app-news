import React from "react";
import axios from "axios";

function CategoryNews(){
    const [dataCategory, setDataCategory] = React.useState([])
    const [filterCategory, setFilterCategory] = React.useState('')
    const [inputSearchNewsLocal, setInputSearchNewsLocal] = React.useState('')

    const categoryAxios = axios.create({
        baseURL: 'https://newsapi.org/',
        params:{
            'apiKey': '5a03cee5e2594c8ea66e80860c45fbba',
            'q': inputSearchNewsLocal,
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

    const searchNewsLocal = dataCategory.filter(item =>{
        return item.title.toLocaleLowerCase().includes(inputSearchNewsLocal.toLocaleLowerCase())
    })

    return(
        <div className="container-news-local">

            <div className="container-search-news-local">
                <h1>Noticias de Colombia</h1>
                <input
                className="search-news-local"
                placeholder="Buscar noticia"
                value={inputSearchNewsLocal}
                onChange={(event)=>{
                    setInputSearchNewsLocal(event.target.value)
                }}
                />
            </div>

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

            <div className="container-all-news-local">
                {searchNewsLocal.map((item, index) =>(
                    <div 
                    className="container-data-category"
                    key={index}>
                        <h3>{`${item.author}:`}</h3>
                        <article>{item.title}</article>
                        <a 
                        className="url-category-local"
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >Leer noticia</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { CategoryNews }