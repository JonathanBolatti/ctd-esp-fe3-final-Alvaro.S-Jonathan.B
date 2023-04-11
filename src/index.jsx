import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Favs from "./Pages/Favs";
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
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<App />}>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/favs" element={<Favs />} />
                <Route path="/dentist/:id" element={<Detail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DentistProvider>
      </CardProvider>
    </GlobalContext>
  </React.StrictMode>
);


