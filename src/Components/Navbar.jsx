import React from 'react'
import "../index.css"
import { Link, useNavigate } from 'react-router-dom'
import {ContextGlobal} from './utils/global.context'
import  { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  const {state, dispatch} = useContext(ContextGlobal)

  const handleClick = () => {
    navigate(-1)
  }
  const changeTheme = () => {
    const valor = state.theme
    dispatch({type: "dark", payload: !valor});
  }

  return (
    <nav>
    <button onClick={changeTheme} style={{backgroundColor: "black", border: "1px solid red", borderRadius: "10px", padding: "10px", color: "white", fontWeight: "bold", fontFamily: "Helvetica, Arial, sans-serif", cursor: "pointer"}}>Change theme🌓</button>
    <ul style={{ listStyleType: "none", margin: 0, marginTop: "10px", padding: 0 }}>
      <Link to={"/home"} style={{ marginRight: "50px", backgroundColor: 'black', color: "white", padding: "5px 20px", borderRadius: "10px" }}>Home</Link>
      <Link to={"/contact"} style={{ marginRight: "50px", backgroundColor: 'black', color: "white", padding: "5px 20px", borderRadius: "10px" }}>Contact</Link>
      <Link to={"/favs"} style={{ marginRight: "50px", backgroundColor: 'black', color: "white", padding: "5px 20px", borderRadius: "10px" }}>Favs</Link>
    </ul>
    <button onClick={handleClick} style={{backgroundColor: "black", border: "1px solid red", borderRadius: "10px", padding: "10px", color: "white", fontWeight: "bold", fontFamily: "Helvetica, Arial, sans-serif", cursor: "pointer"}}>Log Out</button>
  </nav>
  )
}

export default Navbar