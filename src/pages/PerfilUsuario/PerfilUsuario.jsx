import {
  Box,
  Button,
  Container,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect, useState } from "react";
import "./PerfilUsuario.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const PerfilUsuario = () => {
  // El objeto va a estar vacio, ahora esta lleno porque es de prueba pero es para que tenga las keys
  const initData = {
    name: "joa",
    lastname: "par",
    dni: "39054656",
    date: new Date(),
    ciul: "339999999",
    password: "password",
    admissionDate: "1996-02-18",
    email: "joa@par",
    telephone: "1132328090",
    street: "calle joa",
    streetNumber: "123",
    postalCode: "1223",
    tower: "1",
    floor: "3",
    apartment: "12",
    location: "Capital",
    province: "Buenos aires",
    country: "Argentina",
    holiday: 12,
    idAdmin: false,
    supervisorId: 3,
  };
  const [isNew, setIsNew] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [rePassword, setRePassword] = useState(userInfo.password);
  const [image, setImage] = useState(null);
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    // si es true traemos los datos del usuario desde llamando a una funcion en service
    isNew && setUserInfo({ ...initData });
  }, []);

  const handleChange = (e, inputName) => {
    const info = userInfo;
    info[inputName] = e.value;
    setUserInfo({ ...info });
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

  const handleSubmit = () => {
    // si es nuevo llamamos a metodo saveUser en service POST()
    if (isNew) {
      // saveUser(userInfo);
    }
    // Si no es nuevo tenemos que hacer un update (PUT)
    else {
      // updateUser();
    }
  };

  return (
    <Container
      sx={{
        marginTop: "30px",
        display: "flex",
        border: "0.9px solid #D8D8D8",
      }}>
      <Box component='form' width={"100%"}>
        <Box p={3}>
          <Typography color='error.light' variant='h4'>
            Mi perfil
          </Typography>
          <Divider></Divider>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <input
            hidden
            accept='image/*'
            id='contained-button-file'
            multiple={false}
            type='file'
            onChange={handleImageChange}
          />
          <label htmlFor='contained-button-file'>
            <Button
              sx={{ margin: "5px" }}
              variant='contained'
              color='primary'
              component='span'>
              Subir Imagen
            </Button>
          </label>
          {image && <img src={image} alt='Usuario' width={150} />}
          <Box
            sx={{
              ml: 5,
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              flexDirection: "row",
            }}>
            <TextField
              sx={{ m: 2 }}
              id='nombre'
              label='Nombre'
              type='text'
              variant='outlined'
              value={userInfo.name}
              onChange={(e) => handleChange(e, "name")}
            />
            <TextField
              sx={{ m: 2 }}
              id='password'
              label='nueva password'
              type='password'
              variant='outlined'
              value={userInfo.password}
              onChange={(e) => handleChange(e, "password")}
            />
            <TextField
              sx={{ m: 2 }}
              id='apellido'
              label='Apellido'
              type='text'
              variant='outlined'
              value={userInfo.lastname}
              onChange={(e) => handleChange(e, "lastname")}
            />
            <TextField
              sx={{ m: 2 }}
              id='passwordRepetida'
              label='repetir password'
              type='password'
              variant='outlined'
              value={rePassword}
              onChange={(e) => setRePassword(e.value)}
            />
          </Box>
        </Box>
        {/* //Primer acordion de datos */}
        <Accordion
          sx={{
            mb: 3,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
          defaultExpanded='true'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Ver más datos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              <TextField
                sx={{ m: 2, width: "220px" }}
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{ m: 2, width: "220px" }}>
                  <DatePicker label='Fecha de nacimiento' />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{ m: 2, width: "220px" }}>
                  <DatePicker
                    label='Fecha de ingreso'
                    id='fechaingreso'
                    type='date'
                    variant='outlined'
                    // value={userInfo.date}
                    onChange={(e) => handleChange(e, "date")}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                sx={{ m: 2 }}
                id='dni'
                label='DNI'
                variant='outlined'
                value={userInfo.dni}
                onChange={(e) => handleChange(e, "dni")}
              />
              <TextField
                sx={{ m: 2 }}
                id='cuil'
                label='CUIL'
                type='text'
                variant='outlined'
                value={userInfo.ciul}
                onChange={(e) => handleChange(e, "ciul")}
              />
              <TextField
                sx={{ m: 2 }}
                id='telefono'
                label='Telefono'
                variant='outlined'
                value={userInfo.telephone}
                onChange={(e) => handleChange(e, "telephone")}
              />
              <TextField
                sx={{ m: 2 }}
                id='correo'
                label='Correo electronico'
                type='email'
                variant='outlined'
                value={userInfo.email}
                onChange={(e) => handleChange(e, "email")}
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
                value={userInfo.street}
                onChange={(e) => handleChange(e, "street")}
              />
              <TextField
                sx={{ m: 2 }}
                id='altura'
                label='Altura'
                variant='outlined'
                value={userInfo.streetNumber}
                onChange={(e) => handleChange(e, "streetNumber")}
              />
              <TextField
                sx={{ m: 2 }}
                id='codig opostal'
                label='Codigo postal'
                variant='outlined'
                value={userInfo.postalCode}
                onChange={(e) => handleChange(e, "postalCode")}
              />
              <TextField
                sx={{ m: 2 }}
                id='torre'
                label='Torre'
                variant='outlined'
                value={userInfo.tower}
                onChange={(e) => handleChange(e, "tower")}
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
                value={userInfo.apartment}
                onChange={(e) => handleChange(e, "apartment")}
              />
              <TextField
                sx={{ m: 2 }}
                id='localidad'
                label='Localidad'
                variant='outlined'
                value={userInfo.location}
                onChange={(e) => handleChange(e, "location")}
              />
              <TextField
                sx={{ m: 2 }}
                id='provincia'
                label='Provincia'
                variant='outlined'
                value={userInfo.province}
                onChange={(e) => handleChange(e, "province")}
              />
              <TextField
                sx={{ m: 2 }}
                id='pais'
                label='Pais'
                variant='outlined'
                value={userInfo.country}
                onChange={(e) => handleChange(e, "country")}
              />
              <TextField
                sx={{ m: 2 }}
                id='diasVacaciones'
                label='Dias Vacaciones'
                variant='outlined'
                value={userInfo.holiday}
                onChange={(e) => handleChange(e, "holiday")}
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
            Guardar
            <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PerfilUsuario;
