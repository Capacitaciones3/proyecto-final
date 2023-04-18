import {
  Box,
  Button,
  Container,
  Divider,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";

const CrearUsuario = () => {
  const [image, setImage] = useState(null);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Container
      sx={{
        marginTop: "30px",
        display: "flex",
        border: "0.9px solid #D8D8D8",
      }}>
      <Box component='form'>
        <Box p={3}>
          <Typography color='error.light' variant='h4'>
            Nuevo Usuario
          </Typography>
          <Divider></Divider>
        </Box>
        <Box
          sx={{
            width: "800px",
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          {image && <img src={image} alt='Usuario' width={150} />}
          <input
            accept='image/*'
            id='contained-button-file'
            multiple={false}
            type='file'
            onChange={handleImageChange}
          />
            <Button
              hidden
              sx={{ margin: "5px" }}
              variant='contained'
              color='primary'
              component='span'>
              Subir Imagen
            </Button>

          <Box sx={{ ml: 5 }}>
            <TextField
              sx={{ m: 2 }}
              id='nombre'
              label='Nombre'
              type='text'
              variant='outlined'
            />
            <TextField
              sx={{ m: 2 }}
              id='password'
              label='nueva password'
              type='password'
              variant='outlined'
            />
            <TextField
              sx={{ m: 2 }}
              id='apellido'
              label='Apellido'
              type='text'
              variant='outlined'
            />
            <TextField
              sx={{ m: 2 }}
              id='passwordRepetida'
              label='repetir password'
              type='password'
              variant='outlined'
            />
          </Box>
        </Box>
        {/* //Primer acordion de datos */}
        <Accordion sx={{ mb: 3 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Ver más datos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <TextField
                sx={{ m: 2, width: "200px" }}
                id='supervisor'
                displayEmpty
                select
                label='Bajo supervision de:'
                variant='filled'>
                <MenuItem key='1' value='Administrador'>
                  Administrador
                </MenuItem>
                <MenuItem key='2' value='Tincho'>
                  Tincho
                </MenuItem>
                <MenuItem key='3' value='Laura'>
                  Laura
                </MenuItem>
              </TextField>
              <TextField
                sx={{ m: 2 }}
                id='fechaNacimiento'
                label='Fecha Nacimiento'
                type='date'
                variant='outlined'
              />

              <TextField
                sx={{ m: 2 }}
                id='fechaingreso'
                label='Fecha Ingreso'
                type='date'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='dni'
                label='DNI'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='cuil'
                label='CUIL'
                type='text'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='telefono'
                label='Telefono'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='correo'
                label='Correo electronico'
                type='email'
                variant='outlined'
              />
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* //Segundo acordion de datos */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Datos personales</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <TextField
                sx={{ m: 2 }}
                id='calle'
                label='Calle'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='altura'
                label='Altura'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='codig opostal'
                label='Codigo postal'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='torre'
                label='Torre'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='piso'
                label='Piso'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='departamento'
                label='Departamento'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='localidad'
                label='Localidad'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='provincia'
                label='Provincia'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='pais'
                label='Pais'
                variant='outlined'
              />
              <TextField
                sx={{ m: 2 }}
                id='diasVacaciones'
                label='Dias Vacaciones'
                variant='outlined'
              />
              
            </Box>
          </AccordionDetails>
        </Accordion>
        <Box
          sx={{
            display: "flex",
            padding: "20px",
            margin: "10px",
            justifyContent: "end",
          }}>
          <Button variant='contained' color='primary'>
            Crear
            <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CrearUsuario;
