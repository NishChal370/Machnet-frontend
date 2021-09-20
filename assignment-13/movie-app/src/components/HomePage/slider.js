import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../../App';

import './home.css';

function Slider() {
    const { datas }= useContext(Context);
    let [nowShowing, setNowShowing] = useState(0);
    let movieLargeImage = (datas.action[nowShowing].large_cover_image)?datas.action[nowShowing].large_cover_image : '';
    let movieMediumImage = (datas.action[nowShowing].medium_cover_image)?datas.action[nowShowing].medium_cover_image: '';

    const changeImageHandler=()=>{

        if(nowShowing<9){
            nowShowing += 1;
        }
        else{
            nowShowing = 0;
        }
        setNowShowing(nowShowing);

    }
    
    useEffect(()=>{
        setInterval(()=>{changeImageHandler()},3000);
    },[]);

    return (
        <div className='slider__container'>
            <figure className="slider__figure">
                <img src={(movieLargeImage) ? movieLargeImage : movieMediumImage} alt="movieImage"/>
            </figure>
        </div>
    )
}

export default Slider
