import React, { useContext } from 'react'
import { ToSubscribe } from '../Components/ToSubscribe'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  return (

    <div className={state.theme}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <ToSubscribe />
    </div>
   
  )
}

export default Contact