import React, { useContext } from 'react'
import { useLocation } from 'react-router';

import { Context } from '../../App';
import Card from '../common/Card/card';

import './genres.css'

function Genres() {
    const { datas }= useContext(Context);

    const  location = useLocation();
    
    let genre = location.state;
    let genreDatas = datas[genre];

    return (
        <div className="genre__container">
            <h1 className='genre__title'>{genre.toUpperCase()}</h1>
            <div className="genre-movies__container">
                {
                    genreDatas.map((data,index)=>{
                    return (
                        <div key={`genre${index}`} >
                            <Card data={data}/>
                        </div>
                    )
                    })
                }
                
                {(genreDatas.length <= 10) && <h1>Loading....</h1>}
            </div>
        </div>
    )
}

export default Genres
