import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { dentists, state } = useContext(ContextGlobal);
  const { id } = useParams();
  const dentist = dentists.find(dentist => dentist.id == id) || {}

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <div className={state.theme}>
        <h1>Detail Dentist id </h1>
        <table>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">website</th>
          </tr>
          <tr>
            <th scope="row">{dentist.name}</th>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Detail