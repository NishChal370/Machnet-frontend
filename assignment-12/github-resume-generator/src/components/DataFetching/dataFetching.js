import {useState, useEffect} from 'react';
import axios from 'axios';

function useData() {
    const [userData, setUserData]= useState();
    const [userName, setUserName]= useState('');   

    useEffect(()=>{
        const getUser = async ()=> {
            try {
                if(userName.trim() !== ''){
                    const response = await axios.get(`https://api.github.com/users/${userName}`);
                    if(response.status.toString() === '200'){
                        setUserData(response.data);
                    }
                }
            } catch (error) {
                console.error("ERRROR-> ",error);
            }
        }
        
        getUser();
    },[userName]);
    
    return [userData, setUserName];
}

export default useData;
