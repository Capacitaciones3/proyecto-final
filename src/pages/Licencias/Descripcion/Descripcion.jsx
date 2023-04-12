import { Box, TextField, Typography } from '@mui/material';
import React, { useState }  from 'react'

const Descripcion =({handleData}) => {

  const [text, setText] = useState(null);

  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };


  return (
    <>
    <Typography variant="subtitle1">DESCRIPCION</Typography>
    <Box
      id="descripcion"
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ width:'90%'}}
        id="descripcionLicencia"
        multiline
        rows={5}
        size='8'
        placeholder='Ingrese una descripcion de la licencia'
        name='descripcionLicencia'
        onChange={(e)=>{handleData(e); handleText(e)}} 
        />
    </Box>
    </>
  );
}

export default Descripcion;