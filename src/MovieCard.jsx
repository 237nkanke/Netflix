import React from 'react';
import {FiInfo} from  'react-icons/fi'
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type} <button><FiInfo/></button></span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;