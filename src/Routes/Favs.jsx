import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ButtomContext } from "../Components/utils/DeleteContext";
import { FavContext } from "../Components/utils/FavContext";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);
  const { dispatch } = useContext(ButtomContext);
  const { state } = useContext(FavContext);

  const getFavorites = () => {
    const data = JSON.parse(localStorage.getItem("dentista"));
    setFavorites(data);
  };

  useEffect(() => {
    getFavorites();
    dispatch({ type: "eliminar" });
  }, [dispatch]);

  const removeFavorite = (id) => {
    const filteredFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("dentista", JSON.stringify(filteredFavorites));
    setFavorites(filteredFavorites);
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {favorites &&
          favorites.map((states) => {
            if (state.find((fav) => fav.id === states.id)) {
              return (
                <div key={states.id}>
                  <Card id={states.id} name={states.name} username={states.username} removeFavorite={removeFavorite} />
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </>
  );
};

export default Favs;
