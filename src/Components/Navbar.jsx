import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch, state } = useContext(ContextGlobal)
  console.log(state)
  return (
    <nav id="nav" className={state.theme}>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contacto">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <button className="button_theme" onClick={() => dispatch({ type: "theme" })}>🌓</button>
    </nav>

  )
}

export default Navbar