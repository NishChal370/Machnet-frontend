import React, { useState } from 'react'
import Card from '../common/Card/card';
import './home.css';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Movies({datas, seeMoreHandler, title}) {
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
            <div className='movie__container'>
                <section className='title-buttons__container'>
                    <div className='movie-title__container'>
                        <h1>{title}</h1>
                        <button className='movie-next__button' onClick={seeMoreHandler}>See More</button>
                    </div>
                    
                    <div className='next-prev-button__container'>
                        <button onClick={()=>changeImage('prev')} style={{visibility: (show.prev <=0 )&&'hidden'}}><AiFillCaretLeft/></button>
                        <button onClick={()=>changeImage('next')} style={{visibility: (show.next >=10)&&'hidden'}}><AiFillCaretRight/></button>
                    </div>
                </section>

                <section className='movie__slider'>
                    { 
                        datas.slice(show.prev, show.next).map((data, index)=>{
                            return <Card key={`card`+index} index={index} data={data}/>
                        })
                    }
                </section>
            </div>
        </>
    )
}

export default Movies
