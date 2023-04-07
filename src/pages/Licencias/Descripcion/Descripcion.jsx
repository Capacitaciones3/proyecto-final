import { Box, TextField } from '@mui/material';
import React, { useState }  from 'react'

const Descripcion =() => {

  const [textArea, setTextArea] = useState();
  const [textAreaDisabled, setTextAreaDisabled] = useState(false);

  const atextarea = (e) => {
    setTextArea(e.target.value);
    setTextAreaDisabled(true);
  };

  const enableTextArea = () => {
    setTextAreaDisabled(false);
  };

  return (
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
        rows={9}
        size='8'
        defaultValue="Ingrese una descripcion de la licencia"
        placeholder='Ingrese una descripcion de la licencia' 
        />
    </Box>

  );
}

export default Descripcion;