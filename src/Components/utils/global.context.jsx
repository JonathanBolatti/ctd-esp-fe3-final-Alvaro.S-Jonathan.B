import React, { createContext } from "react";
import { useReducer } from "react";
export const initialState = {theme: "light"}

const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { theme: state.theme === "light" ? "dark" : "light" };

    default:
      throw new Error();
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentists, setDentists] = React.useState([]);
  const [state,dispatch] = useReducer(reducer,initialState)

  React.useEffect(
    () => {
      fetch ("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(data =>{
        setDentists(data)})
    },
    []
  )
  return (
    <ContextGlobal.Provider value={{dentists,
    state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
