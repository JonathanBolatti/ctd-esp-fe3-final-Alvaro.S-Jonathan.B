import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import "../index.css"
import { ButtomContext } from '../Components/utils/DeleteContext'
import Navbar from '../Components/Navbar'


const Home = () => {

  const [dentists, setDentistas] = useState([])
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
          {dentists.map(dentist => (
            <div key={dentist.id}>
              <Card id={dentist.id} name={dentist.name} username={dentist.username} />
            </div>
            ))
          }
      </div>
    </main>
  )
}

export default Home