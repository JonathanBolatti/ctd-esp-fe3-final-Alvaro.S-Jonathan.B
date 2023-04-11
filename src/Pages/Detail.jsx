import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Detail = () => {

  const [dentist, setDentist] = useState()
  const params = useParams()


  const getDentist = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json();
    setDentist(data)
  }

  useEffect(() => {
    getDentist();
  }, [params])

  return (
    <>
      <h1>Dentist Data</h1>
      <div className='cardDetail'>
        <div>
            <h3>Personal information</h3>
              <p><b>Name:</b>  {dentist?.name}</p>
              <p><b>Email:</b> {dentist?.email}</p>
              <p><b>Phone:</b> {dentist?.phone}</p>
              <p><b>Website:</b> {dentist?.website}</p>
        </div>
      </div>

    </>
  )
}

export default Detail