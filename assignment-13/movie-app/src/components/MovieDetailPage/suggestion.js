import React, { useContext } from 'react'

import { Context } from '../../App';
import Card from '../common/Card/card';

import './movieDetail.css'

function Suggestion() {
    const { suggestMovies }= useContext(Context);

    return (
        <div className='suggestion__container'>
            <p>Movies You may like</p>
            <div className='suggested__movie'>
                { 
                    suggestMovies.map((data, index)=>{
                        return <Card key={`card`+index} index={index} data={data}/>
                    })
                }
            </div>
            
        </div>
    )
}

export default Suggestion
