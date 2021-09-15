import {useState, useEffect} from 'react'
import axios from 'axios'

function useData() {
    const [loading, setLoading] = useState(false);
    const [clothData, setClothData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) =>{
                // OK respone status
                if(response.status.toString() === '200'){
                    setClothData(response.data);
                    (clothData.length > 0)
                        ? setLoading(false)
                        : setLoading(true)
                }
                
            })
            .catch(function (error) {
                // handle error
                console.log("Occure error -> ", error);
            });
       
    }, [loading, clothData.length]);

    return [loading, clothData];
}

export default useData
