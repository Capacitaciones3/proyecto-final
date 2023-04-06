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
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="descripcionLicencia"
        label="Descripción"
        rows={8}
        size=''
        defaultValue="Ingrese una descripcion de la licencia"
        onChange={atextarea} disabled={textAreaDisabled} 
        placeholder='Ingrese una descripcion de la licencia' 
        />
    </Box>

  );
}

export default Descripcion;