import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Context } from '../../../App';

import './card.css';
import { MdPlaylistAdd } from "react-icons/md";
import { MdPlaylistAddCheck } from "react-icons/md";

import { BsEyeFill } from "react-icons/bs";
import { FcRating } from 'react-icons/fc';

function Card({data}) {
    let {id, large_cover_image, medium_cover_image, rating,title_english, year} = data;
    
    const [added, setAdded] = useState();
    const [watchListStore, setwatchListStore] = useState([]);
    const [watchedMovieList, setWatchedMovieList] =  useState([]);

    let history = useHistory();
    const { setSelectedMovieDetailHandler }= useContext(Context);

    const createLocalStore=()=>{
        (localStorage.getItem('watchList') === null) && localStorage.setItem('watchList','[]');
        (localStorage.getItem('watchedList') === null) && localStorage.setItem('watchedList','[]');
    }

    const watchMovieHandler=()=>{
        setSelectedMovieDetailHandler(data.id);
        saveWatchedMovieHandle(id);
        
        history.push('/movie-detail');        
    }

    const saveWatchedMovieHandle=(id)=>{
        (localStorage.getItem('watchedList') === null) && localStorage.setItem('watchedList','[]');

        let old_watchedList = JSON.parse(localStorage.getItem('watchedList'));
        localStorage.setItem('watchedList', JSON.stringify(old_watchedList));
        if(!old_watchedList.includes(id)){
            old_watchedList.push(id);
            localStorage.setItem('watchedList', JSON.stringify(old_watchedList));

            removeWatchList(id);
        }
    }

    const getWatchedMovieHandler=()=>{
        let watchedMovieList = JSON.parse(localStorage.getItem('watchedList'));
        setWatchedMovieList((old)=>([...old, watchedMovieList]));
    }

    const saveToWatchListHandler=(id)=>{
        if(localStorage.getItem('watchList') === null){
            localStorage.setItem('watchList','[]');
        }
      
        let old_watchList = JSON.parse(localStorage.getItem('watchList'));

        if(!old_watchList.includes(id)){
            old_watchList.push(id);
            localStorage.setItem('watchList', JSON.stringify(old_watchList));
            
            setAdded(true);
        }
    }

    const removeWatchList=(id)=>{
        setAdded(false);
        let existingWatchList = JSON.parse(localStorage.getItem('watchList'));
        let moveIndex = existingWatchList.indexOf(id);
        existingWatchList.splice(moveIndex,1);
        localStorage.setItem('watchList', JSON.stringify(existingWatchList));
    }

    const getLocalStoreWatchListData=()=>{
        let watchListStore = JSON.parse(localStorage.getItem('watchList'));

        setwatchListStore(watchListStore);
    }

    const createRating=(rating)=>{
        let ratingArray=[];
        for (var i = 0; i < rating; i++) {
            ratingArray.push(<FcRating/>)
          }
        return ratingArray
    }

    useEffect(()=>{
        getLocalStoreWatchListData();
    },[added]);

    useEffect(()=>{
        createLocalStore();
        getWatchedMovieHandler();
    },[])

    return (
        <main className="card__container">
            <div className='watchlist__icons'>
                {(watchedMovieList[0] !== undefined)
                    && (!watchedMovieList[0].includes(id))
                            ? (watchListStore !== null && watchListStore !== [])
                                    ?(!watchListStore.includes(id))
                                        ? <MdPlaylistAdd onClick={()=>saveToWatchListHandler(id)}/>
                                        : <MdPlaylistAddCheck onClick={()=>removeWatchList(id)}/>

                                    : <MdPlaylistAdd onClick={()=>saveToWatchListHandler(id)}/>

                            : <BsEyeFill/>
                }
                
            </div>

            <section onClick={watchMovieHandler}>
                <figure className="card__figure">
                    <img src={(large_cover_image) ? large_cover_image : medium_cover_image} alt="movieImage"/>
                </figure>

                <div>
                    <div className='rating'>{createRating(rating).map((rating,index)=><span key={'rating'+index}>{rating}</span>)}</div>
                    <p>Year: {year}</p>
                    <p className='card-movie__title'>{title_english}</p>
                </div>
            </section>
            
        </main>
    )
}

export default Card
