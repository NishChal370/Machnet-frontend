import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './watchList.css'
import Card from '../common/Card/card';

function Watchlist() {
    const [movies, setMovies] = useState([]);
    const [renderOn, setRenderOn] = useState(false);

    const getMovieDetail=(movieId)=>{
        axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
            .then((response)=> {
                // handle success
                if(response.status.toString() === '200'){
                    let value = response.data.data.movie
                    setMovies((old)=>([...old, value]));
                    
                }
            })
            .catch((error) =>{
                // handle error
                alert(error);
            });
    }

    const getLocalStoreData=()=>{
        let watchListMoviesIdList = JSON.parse(localStorage.getItem('watchList'));
        setMovies([]);
        for( let index in watchListMoviesIdList){
            getMovieDetail(watchListMoviesIdList[index]);
        }
    }

    useEffect(()=>{
        getLocalStoreData();
    },[renderOn]);

    return (
        <main className='watch-list__container' >
            <h1 className='watch-list__title'>WatchList</h1>
            <div className='watch-list-movies__container'>
                {
                    movies.map((movie, index)=>{
                        return  <span key={`watch${index}`} onClick={()=>{(renderOn)? setRenderOn(false): setRenderOn(true)}}>
                                    <Card data={movie}/>
                                </span>
                    })

                }
                {
                    (movies.length === 0) && <p className='watched-list__empty'>Watched list not created</p>
                }
            </div>
            
        </main>
    )
}

export default Watchlist
