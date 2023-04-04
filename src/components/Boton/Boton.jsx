import React from 'react'
import { Button
 } from '@mui/material'

const Boton = ({mensaje}) => {
  return (
    <Button variant='contained'>{mensaje}</Button>
  )
}

export default Boton