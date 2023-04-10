import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import DentistProvider from "./Components/utils/FavContext";
import GlobalContext from "./Components/utils/global.context";
import CardProvider from "./Components/utils/DeleteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <CardProvider>
        <DentistProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="login" element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="favs" element={<Favs />} />
                <Route path="/dentist/:id" element={<Detail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DentistProvider>
      </CardProvider>
    </GlobalContext>
  </React.StrictMode>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <App/>
//   </React.StrictMode>
// );

