import { PhotoCamera } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React, { useState } from 'react'

const SubirArchivo = () => {

  const [file, setFile] = useState();
  const [fileDisabled, setFileDisabled] = useState(false);

  const fileEvent = (e) => {
    setFile(e.target.value);
    setFileDisabled(true);
  };

  const enableFile = () => {
    setFileDisabled(false);
  };


  return (
    <div>
      <Button variant="contained" component="label">
        Subir Archivo
        <input hidden accept="image/*" multiple type="file"/>
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
  </div>
  )
}

export default SubirArchivo

/* onChange={fileEvent} disabled={fileDisabled}
onClick={enableFile}*/