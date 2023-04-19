import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const SubirArchivo = ({ handleData }) => {
  const [file, setFile] = useState(false);
  const [message, setMessage] = useState(true);

  const handleFile = (e) => {
    setFile(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Typography variant='subtitle1'>ARCHIVO ADJUNTO</Typography>
      <Typography
        variant='subtitle2'
        onChange={(e) => {
          handleMessage(e);
        }}>
        No hay archivos adjuntos todavia
      </Typography>
      <div>
        <Button
          component='label'
          sx={{
            width: "40%",
            "&:hover": {
              backgroundColor: "green",
            },
          }}
          color='success'
          variant='contained'>
          Subir Archivo
          <input
            hidden
            accept='image/jpg, image/png'
            type='file'
            name='archivo'
            onChange={(e) => {
              handleData(e);
              handleFile(e);
            }}
          />
        </Button>
        <IconButton
          aria-label='upload picture'
          component='label'
          color='success'
          variant='contained'>
          <input
            hidden
            accept='image/*'
            type='file'
            name='archivo'
            onChange={(e) => {
              handleData(e);
              handleFile(e);
            }}
          />
          <PhotoCamera />
        </IconButton>
      </div>
    </Box>
  );
};

export default SubirArchivo;
