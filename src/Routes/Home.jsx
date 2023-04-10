import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import "../index.css"
import { ButtomContext } from '../Components/utils/DeleteContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentistas, setDentistas] = useState([])
  const {dispatch} = useContext(ButtomContext)

  const getDentista = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    setDentistas(data)
  }

  useEffect(() => {
    getDentista()
    dispatch({type: "favorite"})
  }, [dispatch])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
          {dentistas.map(dentista => (
            <div key={dentista.id}>
              <Card id={dentista.id} name={dentista.name} username={dentista.username} />
            </div>
            ))
          }
      </div>
    </main>
  )
}

export default Home