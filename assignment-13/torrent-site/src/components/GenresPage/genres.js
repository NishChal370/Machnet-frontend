import React, { useContext } from 'react'
import { useLocation } from 'react-router';

import { Context } from '../../App';
import Card from '../common/Card/card';

import './genres.css'

function Genres() {
    const { datas, changeLimit }= useContext(Context);

    const  location = useLocation();

    let genre = location.state;
    let genreDatas = datas[genre];

    const seeWatchMovieHandler=(data)=>{
        alert("heo");
        console.log("crad cliked");
        console.log(data)
        console.log("card cliked stop")
        
    }

    return (
        <div className="genre__container">
            {
                genreDatas.map((data,index)=>{
                   return (
                       <div key={`genre${index}`} onClick={()=>seeWatchMovieHandler(data)}>
                           <Card data={data}/>
                       </div>
                   )
                })
            }
            {(genreDatas.length <= 10) && <h1>Loading....</h1>}
        </div>
    )
}

export default Genres
