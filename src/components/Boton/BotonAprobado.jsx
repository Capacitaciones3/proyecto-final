import React from 'react'
import { Button
 } from '@mui/material'

const Boton = () => {
  return (
    <Button sx={{
      width : 99,
      height: 13,
      backgroundColor: "#05CB3C",
      borderRadius:16,
      color: "#ffffff",
      padding: 1.2
    }}>Aprobado</Button>
  )
}

export default Boton