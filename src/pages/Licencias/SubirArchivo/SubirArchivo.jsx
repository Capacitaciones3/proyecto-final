import { PhotoCamera } from '@mui/icons-material'
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SubirArchivo = () => {

    const [file, setFile] = useState(false);
    const [message, setMessage] = useState(true);




  return (
      <Box sx={{ width: '100%', display:'flex', flexDirection: 'column', alignItems:'center'}}>
      <Typography variant="h6" gutterBottom>
        ARCHIVO ADJUNTO
      </Typography>
          <Container sx={{ width: '100%', display:'flex', alignSelf: 'center'}}>
              <Button variant="contained" component="label" >
                Subir Archivo
                <input hidden accept="image/jpg, image/png" type="file"  />
              </Button>
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
          </Container>
      </Box>
  )
}

export default SubirArchivo

/* onChange={fileEvent} disabled={fileDisabled}
onClick={enableFile}*/

/* const [file, setFile] = useState();
const [fileDisabled, setFileDisabled] = useState(false);

const fileEvent = (e) => {
  setFile(e.target.value);
  setFileDisabled(true);
};

const enableFile = () => {
  setFileDisabled(false);
}; */
