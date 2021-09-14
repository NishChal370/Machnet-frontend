import React, {useState} from 'react'
import Button from './common/button';
import UserInputs from './common/userInputs';

import './form.css'

let userData={
    firstName:'',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
}

let inputColor = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
}

function UserForm() {
    const [data, setData] = useState(userData);
    const [initialInputColor, setInputColor] = useState(inputColor);

    const submitHandler=(e)=>{
        e.preventDefault();
        let isEmpty = checkEmpty();
        if(!isEmpty){
            if(data.password.length>=8){
                alert("submitted");
            }
            else{
                alert("pasword length should be greater then 8");
                setColor("password", 'red');
            }
        } 
    }

    const checkEmpty=()=>{
        for (var key in data) {
            if(data[key].length <=0){
                setColor(key, 'red');
                setInputColor({...initialInputColor});

                return true;
            }  
        }
    }

    const changeHandler=(e)=>{
        data[e.target.name] =  e.target.value;
        setColor(e.target.name, '');
        setData({...data});
    }

    const setColor=(changeColorOf, color)=>{
        initialInputColor[changeColorOf] = color;
        setInputColor({...initialInputColor});
    }

    return (
        <form onSubmit={submitHandler}>
            <UserInputs data={data} changeHandler={changeHandler} initialInputColor={initialInputColor}/>
            <div className='button__container'>
                <Button/>
            </div>  
        </form>
    )
}

export default UserForm

