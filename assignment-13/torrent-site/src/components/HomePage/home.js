import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { Context } from '../../App';
import NavBar from '../common/NavBar/navBar'

import Category from './category';

function Home() {
    const { datas, changeLimit }= useContext(Context);
    const history = useHistory();
    
    const seeMoreHandler=(genre)=>{
        changeLimit(genre);
        history.push({pathname:'/genres', state:genre});
    }

    return (
        <>
            {/* <NavBar/> */}
            <div className='home__container'>
                <h1>I am home</h1>
                <Category title='Action' datas={datas.action} seeMoreHandler={()=>seeMoreHandler('action')}/>
                <Category title='Crime' datas={datas.crime} seeMoreHandler={()=>seeMoreHandler('crime')}/>
                <Category title='Thriller' datas={datas.thriller} seeMoreHandler={()=>seeMoreHandler('thriller')}/>
                <Category title='Drama' datas={datas.drama} seeMoreHandler={()=>seeMoreHandler('drama')}/>
            </div>
        </>
    )
}

export default Home
