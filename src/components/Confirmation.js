import React from 'react'
import { useLocation } from 'react-router-dom'

function Confirmation() {
  const { state } = useLocation()

  return (
    <h1 className='font-bold text-xl'>Registration Confirmed!!! Email: {state.email}</h1>
  )
}

export default Confirmation