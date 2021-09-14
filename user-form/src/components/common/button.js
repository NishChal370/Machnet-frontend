import React from 'react'
import '../form.css'

let buttons =[
    {name:'Submit', type: 'submit'},
    {name:'Cancel', type: ''}
];

function Button() {
    return (
        <>
            {
                buttons.map((value,index)=>{
                    return <button key={`btn${index}`} type={value.type}>{value.name}</button>
                }) 
            }
        </>
    )
}

export default Button
