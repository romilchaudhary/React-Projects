import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';
import NewMovie from './components/NewMovie';

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [test, setTest] = useState(0);
  

  const fetchMovies = useCallback((async () => {
    setLoader(true);
    setError(null);
    try { // we have to use try-catch {} with async requests and .catch() without aysnc(with .then())
      const response = await fetch("http://localhost:8000/show-all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const result = await response.json();
      // .then((response) => {
      //   return response.json()
      // }
      // )
      // .then(result => {
      const transformedData = result.movies.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl
        }
        // })        
      }
      );
      setDummyMovies(transformedData)
    }
    catch(error) {
      setError(error.message);
    }
    setLoader(false);
  }), []);


  const AddNewMovieHandler = useCallback(async(movie) => {
    console.log("add new ....")
    try {
    const response = await fetch("http://localhost:8000/add-movie", {
      method: "POST",
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify(movie)
    });
    if(!response.ok){
      throw new Error("invalid request")
    }
    const data = await response.json()
    console.log(data);
  } catch(error) {
    console.log(error.message)
  }

  }, []);

  
  useEffect(() => {
    console.log("useEffect runs only with dependencies...")
    fetchMovies();  
  }, [fetchMovies]);

  const testFun = () => {
    setTest(test + 1);
  }

  let content = <p>No Result Found.</p>;
  if (dummyMovies.length > 0){
    content = <MoviesList movies={dummyMovies} />
  }
  if (error) {
  content = error;
  }
  if(loader){
    content = "Loading............."
  }

  return (
    <React.Fragment>
      <section>
        {/* <AddMovie /> */}
        <NewMovie onAddMovie={AddNewMovieHandler} />
      </section>
      <section>
        <p>data for use callback: {test}</p>
        <button onClick={fetchMovies}>Fetch Movies</button>
        <button onClick={testFun}>Use Callback Test</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
