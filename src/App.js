// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from './footer/footer'
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=2b9f135a";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search[0].Poster)
    setMovies(data.Search);
    // return data.Search.Poster
  };
  
  useEffect(() => {
    searchMovies("naruto");
  }, []);

  return (
    <>
    <div className="app">
      <h1>FILMPIRE</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* <div className="scrole">

        <img src={searchMovies('naruto')} alt="" />
      </div> */}

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

export default App;
