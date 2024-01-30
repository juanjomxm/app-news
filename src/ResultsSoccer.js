import React from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";

const apiSoccer = axios.create({
    baseURL: 'https://www.scorebat.com/video-api/v3/feed/?token=MTM4Njc3XzE3MDY2MzQzNjZfNmU5M2NjNjkwNzNkMTc1ODhlMTgwNmE0MDk4MmFlMzZiNTllYWY4NQ==', //"https://free-football-soccer-videos.p.rapidapi.com/",
    // headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     'X-RapidAPI-Key': 'ff9ffd5791msh6da170c435b05cap15c41djsnb9ef3b60b095',
    //     'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    // }
})

function SoccerApi(){
    const {
        inputSearchResult, 
        setInputSearchResult,
        setViewDataSoccer,
        searchResult,
    } = React.useContext(GlobalContext)

    const soccerView = async () => {
        try {
            const { data, status } = await apiSoccer.get();

            if (status === 200,201) {
                setViewDataSoccer(data.response);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className="container-news-soccer">
            <h1>Resultados de futbol</h1>
            <div className="container-search-results">
                <input
                className="input-search-soccer"
                placeholder="Buscar partido"
                value={inputSearchResult}
                onChange={(event)=>{
                    setInputSearchResult(event.target.value)
                }}
                />

                <button
                onClick={soccerView}
                >Buscar</button>
            </div>

            <div className="container-data-soccer">
                {searchResult.map((item, index) =>( 
                    <div 
                    key={index}
                    className="container-return"
                    >
                        <h4 className="container-name">{item.competition}</h4>
                        <h5>{item.title}</h5>
                        <div>
                            <img
                            src={item.thumbnail}
                            width={200}
                            height={200}
                            ></img>
                        </div>
                        
                        <a 
                            href={item.matchviewUrl} 
                            target="_blank" rel="noopener noreferrer"
                            className="url-results-soccer"
                            >
                                <p>Resumen</p>
                        </a>   
    
                    </div>
                ))} 
            </div>
        </div>
    )
}

export { SoccerApi }
