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
      {/* En cada card deberan mostrar en name - username y el id */}
      <img className="docImagen" src="../images/doctor.jpg" alt="" />
      <h3>
        <Link to={`/dentist/${id}`}>{id}-{name}</Link>
      </h3>
      <h4>{id}</h4>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
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