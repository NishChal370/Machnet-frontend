import React from 'react'
import '../form.css'

let inputsInfo =[
    {title: 'First name', name:'firstName', type:'text'},
    {title: 'Last name', name:'lastName', type:'text'},
    {title: 'User name', name:'userName', type:'text'},
    {title: 'Email', name:'email', type:'email'},
    {title: 'Password', name:'password', type:'password'},
    {title: 'Address', name:'address', type:'text'},
    {title: 'phone', name:'phone', type:'tel'},
];

function UserInputs(props) {
    let {data, changeHandler, initialInputColor} = props;
    return (
        <>
            {
               inputsInfo.map((value, index)=>{
                    if(index<1){
                        return(
                        <span className="user__name" key={`inpt${index}`}>
                            <div>
                                <label>{inputsInfo[0].title}</label><br/>
                                <input 
                                    type={inputsInfo[0].type} 
                                    name={inputsInfo[0].name} 
                                    value={data[inputsInfo[0].name]} 
                                    onChange={changeHandler} 
                                    style={{borderColor: initialInputColor[inputsInfo[0].name]}}
                                /><br/>
                            </div>

                            <div>
                                <label>{inputsInfo[1].title}</label><br/>
                                <input 
                                    type={inputsInfo[1].type} 
                                    name={inputsInfo[1].name} 
                                    value={data[inputsInfo[1].name]} 
                                    onChange={changeHandler} 
                                    style={{borderColor: initialInputColor[inputsInfo[1].name]}}
                                /><br/>
                            </div>
                        </span>
                        )
                    }
                    else if(index>1){
                        return(
                            <span key={`inpt${index}`}>
                                <label>{value.title}</label><br/>
                                <input 
                                    type={value.type} 
                                    name={value.name} 
                                    value={data[value.name]} 
                                    onChange={changeHandler} 
                                    style={{borderColor: initialInputColor[value.name]}}
                                /><br/>
                            </span>
                        )
                    }  
               })
            }
        </>
        
    )
}

export default UserInputs
