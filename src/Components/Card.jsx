import "../index.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../Components/utils/FavContext";
import { ButtomContext } from "../Components/utils/DeleteContext";

const Card = ({ name, username, id, removeFavorite }) => {
  const { dispatch } = useContext(FavContext);
  const { state } = useContext(ButtomContext);

  const [isSelected, setIsSelected] = useState(false);

  const addFav = (id) => {
    dispatch({ type: "addFav", payload: { id: id, name: name, username: username } });
  };

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  const deleteFav = (id) => {
    removeFavorite(id);
    setIsSelected(false);
  };

  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={handleCardClick}>
      <img className="docImagen" src="../images/doctor.jpg" alt="" />
      <h3>
        <Link to={`/dentist/${id}`}>{id}-{name}</Link>
      </h3>
      <h4>{id}</h4>
      {state ? (
        <button onClick={() => deleteFav(id)} className="favButton">
          Delete
        </button>
      ) : (
        <button onClick={() => addFav(id)} className="favButton">
          ⭐
        </button>
      )}
    </div>
  );
};


export default Card;