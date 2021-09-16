import React, { useState } from 'react'
import Card from './common/card';
import NavBar from './common/navBar';
import useData from './DataFetching/dataFetching';

import './mainFrame.css';
import { BounceLoader } from 'react-spinners';

function MainFrame() {
    const [loading, clothData]= useData();
    const [inputvalue, setInputValue] = useState('');
    const [selectCategory, setSelectCategory ]= useState('men\'s clothing');

    // for changing products by clicking nav bar
    const changeCateogaryHandler=(value)=>{
        setSelectCategory(value);
    }

    const inputChangeHandler=(e)=>{
        let value = e.target.value;
        setInputValue(value);
    }

    const confirmInputHandler=()=>{
        setSelectCategory(inputvalue);
    }

    const Products = clothData.filter(
        (data)=>{
            if (data.category.substring(0,1).toLowerCase().includes(selectCategory.substring(0,1).toLowerCase())){
                return data
            } 
            return ''
        }).map(
            (data, index)=>{
                return <Card key={`card${index}`} data={data} />
                
        });

    return (
        <main className="main__container">
            <NavBar 
                inputvalue={inputvalue}
                inputChangeHandler={inputChangeHandler} 
                confirmInputHandler={confirmInputHandler}
                changeCateogaryHandler={changeCateogaryHandler} 
            />

            <section className='products__container'>
                {(loading)
                    ? (
                        <span className='loader'>
                            <BounceLoader size={100} loading/>
                        </span>
                      )
                    : Products
                 }
            </section>
        </main>
    );
}

export default MainFrame
