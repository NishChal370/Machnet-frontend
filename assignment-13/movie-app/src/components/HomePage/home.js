import React, { useContext } from 'react'
import { useHistory } from 'react-router';

import { Context } from '../../App';

import './home.css';
import Movies from './movie';
import Slider from './slider';

function Home() {
    const { datas, changeLimit }= useContext(Context);
    const history = useHistory();
    
    const seeMoreHandler=(genre)=>{
        changeLimit(genre);
        history.push({pathname:'/genres', state:genre});
    }

    return (
        <>
            <div className='home__container'>
                <Slider/>
                <Movies title='Action' datas={datas.action} seeMoreHandler={()=>seeMoreHandler('action')}/>
                <Movies title='Crime' datas={datas.crime} seeMoreHandler={()=>seeMoreHandler('crime')}/>
                <Movies title='Thriller' datas={datas.thriller} seeMoreHandler={()=>seeMoreHandler('thriller')}/>
                <Movies title='Drama' datas={datas.drama} seeMoreHandler={()=>seeMoreHandler('drama')}/>
            </div>
        </>
    )
}

export default Home
