import React, { useContext } from 'react'

import { Context } from '../../App';
import Suggestion from './suggestion';

import './movieDetail.css';

function MovieDetail() {
    const { selectedMovieDetail, suggestMovies }= useContext(Context);

    let torrentData = (selectedMovieDetail !== undefined) && selectedMovieDetail.torrents;

    return (
        <>
        {
        (selectedMovieDetail !== undefined && torrentData !== undefined && suggestMovies !== undefined)
            ?(
                 <div className='selectedMovie__container'>
                    <section className='selected-movie__section'>
                        <figure className="movie-cover__figure">
                            <img src={selectedMovieDetail.large_cover_image} alt='moviePoster'/>
                        </figure>

                        <article className='selected-movie__info'>
                            <span>
                                <h1 className='selected-movie__title'>{selectedMovieDetail.title_english}</h1>
                                <p>Rating: {selectedMovieDetail.rating}</p> 
                                <p>Likes: {selectedMovieDetail.like_count}</p>
                                <div className='genre__list'>Genres :
                                    {selectedMovieDetail.genres.map((genre,index)=>{return <p key={'genre'+index}>{genre}</p>})}
                                </div>
                                <p>{selectedMovieDetail.description_full}</p>                           
                            </span>
                        </article>
                    </section>

                    <section className='selected-movie__video-section'>
                        <p>Watch Video Online</p>
                        <iframe title='movieVideo'
                            src={`https://www.youtube.com/embed/${selectedMovieDetail.yt_trailer_code }`}>
                        </iframe>
                        
                        <div className='download__info'>
                            <p>Click Download</p>
                            <span className="download__link">
                            {
                                torrentData.map((data, index)=>{
                                    return (
                                        <span key={`downloadLink${index}`}>
                                            <p>{data.size}</p>
                                            <a key={`download${index}`} href={data.url}>{data.quality}</a>  
                                        </span> 
                                    )   
                                })
                            }
                            </span>
                        </div>
                        
                    </section>

                    <section className='suggestion__container'>
                        <Suggestion/>
                    </section>

                </div>
                
            ): <p>Movie not selected</p>
        }
        </>
    )
}

export default MovieDetail
