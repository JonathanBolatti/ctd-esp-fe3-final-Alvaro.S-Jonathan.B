import React, { useState } from "react";
import { Link } from "react-router-dom";



const Card = ({ name, username, id }) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const [isFavorite, setIsFavorite] = useState(!!favorites.find(fav => fav.id == id))
  const addFav = () => {
    setIsFavorite(true)
    favorites.push({ name, username, id })
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src="./images/doctor.jpg" alt="image_doctor" className="image_doctor" />
        <p>{name}</p>
        <p>{username}</p>
        <p>{id}</p>
      </Link>
      <button onClick={addFav} disabled={isFavorite} className="favButton">⭐ Add fav ⭐</button>
    </div>
  );
};

export default Card;
