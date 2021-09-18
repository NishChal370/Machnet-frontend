import React, { useState } from 'react'
import Card from '../common/Card/card';
import './category.css'

function Category({datas, seeMoreHandler, title}) {
    const [show, setShow] = useState({prev:0, next: 4});

    const changeImage=(btnName)=>{
        if(btnName === 'prev'){
            if(show.prev > 0){
                show.prev -=1;
                show.next -=1;
            }
        }
        else if(btnName === 'next'){
            if(show.next < 10){
                show.prev +=1;
                show.next +=1;
            }
        }

        setShow({...show});
    }

    return (
        <>
            <h1>{title}</h1>
            <div className='movie__container'>
                { 
                    datas.slice(show.prev, show.next).map((data, index)=>{
                        return <Card key={`card`+index} index={index} data={data}/>
                    })
                }
                <button onClick={()=>changeImage('prev')}>pre</button>
                <button onClick={()=>changeImage('next')}>Next</button>
                <button onClick={seeMoreHandler}>See More</button>
            </div>
        </>
    )
}

export default Category
