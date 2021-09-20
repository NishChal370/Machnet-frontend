import React, { useState , useEffect } from 'react';
import './App.css'
import axios from 'axios';

import MainFrame from './components/mainFrame';

const Context = React.createContext();

let initialLimit ={
  crime: 10,
  drama: 10,
  action: 10,
  thriller: 10,
}

function App() {
  const [limit, setlimit]= useState(initialLimit);
  const [suggestMovies, setSuggestMovies]= useState();
  const [selectedMovieDetail, setSelectedMovieDetail]= useState();
  const [movies, setMovies] = useState({action: [], crime:[], thriller:[], drama:[]});

  const getData=(genre)=>{
    axios.get(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&limit=${limit[genre]}`)
      .then((response)=> {
        // handle success
        if(response.status.toString() === '200'){
          movies[genre]= response.data.data.movies;

          setMovies({...movies})
        }
      })
      .catch( (error)=>{
        // handle error
        alert(error);
      });
  }

  const getMovieDetail=(movieId)=>{
    axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
      .then((response)=> {
        // handle success
        if(response.status.toString() === '200'){
          setSelectedMovieDetail(response.data.data.movie);
        }
      })

      .catch((error) =>{
        // handle error
        alert(error);
      });
  }

  const getSuggestMovieDetail=(movieId)=>{
    axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`)
      .then((response)=> {
        // handle success
        if(response.status.toString() === '200'){
          setSuggestMovies(response.data.data.movies);
        }
      })

      .catch((error)=> {
          // handle error
          alert(error);
      });
  }

  // limit for number of image displaying
  const changeLimit=(genre)=>{
    limit[genre]= 20;
    setlimit({...limit});
    getData(genre);
  }

  const setSelectedMovieDetailHandler=(movieId)=>{
    getMovieDetail(movieId);
    getSuggestMovieDetail(movieId);
  }


  useEffect(()=>{
    getData('crime');
    getData('drama');
    getData('action');
    getData('thriller');
  },[]);

  return (
    <main className="App">
      <Context.Provider value={{datas: movies , changeLimit: changeLimit, 
          selectedMovieDetail: selectedMovieDetail, setSelectedMovieDetailHandler:
          setSelectedMovieDetailHandler, suggestMovies:suggestMovies}}
      >
        {
          (movies.action.length > 0)
            ? <MainFrame />
            : <p className='loading'>Loding...</p>
        }
      </Context.Provider>

    </main>
  );
}

export {Context, App};