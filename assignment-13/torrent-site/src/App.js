import React, { useState , useEffect } from 'react';
import axios from 'axios';

// import './App.css';

import MainFrame from './components/mainFrame';

let initialLimit ={
  action: 10,
  crime: 10,
  drama: 10,
  thriller: 10,
}

const Context = React.createContext();

function App() {
  const [movies, setMovies] = useState({action: [], crime:[], thriller:[], drama:[]});
  const [limit, setlimit]= useState(initialLimit);
  

  function getActionData(){
    axios.get(`https://yts.mx/api/v2/list_movies.json?genre=action&limit=${limit.action}`)
      .then((response)=> {
        // handle success
        if(response.status.toString() === '200'){
          movies.action = response.data.data.movies;
          setMovies({...movies})
        }
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  function getCrimeData(){
    axios.get(`https://yts.mx/api/v2/list_movies.json?genre=crime&limit=${limit.crime}`)
      .then((response)=> {
        // handle success
        if(response.status.toString() === '200'){
          movies.crime = response.data.data.movies;
          setMovies({...movies})
        }
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }


  function getThrillerData(){
    axios.get(`https://yts.mx/api/v2/list_movies.json?genre=thriller&limit=${limit.thriller}`)
      .then((response)=> {
        // handle success
        if(response.status.toString() === '200'){
          movies.thriller = response.data.data.movies;
          setMovies({...movies})
        }
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }
  
  function getDramaData(){
    axios.get(`https://yts.mx/api/v2/list_movies.json?genre=drama&limit=${limit.drama}`)
      .then((response)=> {
        // handle success
        if(response.status.toString() === '200'){
          movies.drama = response.data.data.movies;
          setMovies({...movies})
        }
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }


  const changeLimit=(category)=>{
    limit[category]= 20;
    console.log("changeLimit=> ", limit)
    setlimit({...limit});
  }

  useEffect(()=>{
    getActionData();
    getCrimeData();
    getDramaData();
    getThrillerData();
  },[limit]);

  return (
    <div className="App">

      <Context.Provider value={{datas :movies , changeLimit:changeLimit}}>
        {
          (movies.action.length > 0)
            ? <MainFrame />
            : <p>Loding</p>
        }
      </Context.Provider>

    </div>
  );
}

export {Context, App};
