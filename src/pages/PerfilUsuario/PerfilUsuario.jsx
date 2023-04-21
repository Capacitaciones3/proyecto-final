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
import React, { useContext, useEffect, useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "./PerfilUsuario.css";
import imagen from "./fotoPerfil.jpg";
import "react-toastify/dist/ReactToastify.css";
import { AutenticacionContext } from "../../contexts/Autenticacion";
import {
  crearUsuarioService,
  modificarService,
  perfilService,
} from "../../services/perfilService";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import es from "date-fns/locale/es";
import { ToastContainer, toast } from "react-toastify";
registerLocale("es", es);

const PerfilUsuario = () => {
  const { usuario } = useContext(AutenticacionContext);

  // El objeto va a estar vacio, ahora esta lleno porque es de prueba pero es para que tenga las keys
  const initData = {
    username: "",
    apellido: "",
    password: "",
    rol: "",
    id_supervisor: 0,
    fecha_de_nacimiento: "",
    fecha_de_ingreso: "",
    dni: "",
    cuil: "",
    telefono: "",
    email: "",
    codigo_postal: "",
    dias_de_vacaciones: "",
    foto: "",
    calle: "",
    altura: 0,
    torre: "",
    piso: 0,
    departamento: "",
    localidad: "",
    provincia: "",
    pais: "",
  };
  const [isNew, setIsNew] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [rePassword, setRePassword] = useState(userInfo.password);
  const [image, setImage] = useState(null);
  const [checked, setChecked] = React.useState(false);

  const getIDUsuario = () => {
    const query = new URLSearchParams(window.location.search);
    return query.get("id");
  };

  /* const getNewUsuario = () => {
    const query = new URLSearchParams(window.location.search);
    let res = query.get("usuarioNuevo");

    setIsNew(true);
  }; */

  useEffect(() => {
    // si es true traemos los datos del usuario desde llamando a una funcion en service

    isNew
      ? setUserInfo({ ...initData })
      : perfilService(getIDUsuario()).then((data) => {
          setUserInfo({ ...data });
        });
  }, []);

  // const defaultValue = dayjs.utc().toDate();

  const handleChange = (e, inputName) => {
    const info = userInfo;
    info[inputName] = e.target.value;
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

  const handleDateInput = (date, inputName) => {
    const info = userInfo;
    info[inputName] = date;
    setUserInfo({ ...info });
  };

  const handleSubmit = () => {
    if (userInfo.password === rePassword) {
      if (isNew) {
        // si es nuevo llamamos a metodo saveUser en service POST()
        crearUsuarioService(userInfo).then((res) =>
          toast.info(res, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        );
      }
      // Si no es nuevo tenemos que hacer un update (PUT)
      else {
        // console.log({ ...userInfo, id: 1 });
        modificarService({ ...userInfo, id: getIDUsuario() }).then((res) =>
          toast.info(res, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        );
      }
    } else {
      console.log("error");
      toast.error("Las constraseñas no coinciden", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <Container
      sx={{
        marginTop: "30px",
        display: "flex",
        border: "0.9px solid #D8D8D8",
        backgroundColor: "rgb(251, 251, 251)",
      }}>
      <Box component='form' sx={{ width: "100%", p: 4 }}>
        <Box
          sx={{
            paddingTop: 3,
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}>
          <Typography color='error.light' variant='h4'>
            Mi perfil
          </Typography>
          <Divider />
          <Divider />
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
          <img
            src={imagen}
            alt='Usuario'
            style={{
              borderRadius: "50%",
              height: "130px",
              width: "130px",
              objectFit: "cover",
            }}
          />
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
              InputLabelProps={{ shrink: true }}
              type='text'
              variant='outlined'
              value={userInfo.username}
              onChange={(e) => handleChange(e, "username")}
            />

            <TextField
              sx={{ m: 2 }}
              id='password'
              label='nueva password'
              InputLabelProps={{ shrink: true }}
              type='password'
              variant='outlined'
              value={userInfo.password}
              onChange={(e) => handleChange(e, "password")}
            />
            <TextField
              sx={{ m: 2 }}
              id='apellido'
              label='Apellido'
              InputLabelProps={{ shrink: true }}
              type='text'
              variant='outlined'
              value={userInfo.apellido}
              onChange={(e) => handleChange(e, "apellido")}
            />
            <TextField
              sx={{ m: 2 }}
              id='passwordRepetida'
              label='repetir password'
              type='password'
              InputLabelProps={{ shrink: true }}
              variant='outlined'
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </Box>
        </Box>
        {/* //Primer acordion de datos */}
        <Accordion sx={{ mb: 3 }} defaultExpanded='true'>
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
                defaultValue='Administrador'
                InputLabelProps={{ shrink: true }}
                label='Bajo supervision de:'
                variant='filled'>
                <MenuItem key='1' value='Administrador' disabled>
                  Administrador
                </MenuItem>
                <MenuItem key='2' value={2}>
                  Gabriel
                </MenuItem>
                <MenuItem key='3' value={1}>
                  Joaquín
                </MenuItem>
                <MenuItem key='4' value={3}>
                  Abril
                </MenuItem>
              </TextField>

              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  gap: "30px",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <ReactDatePicker
                  fixedHeight='400px'
                  onChange={(date) => {
                    const info = userInfo;
                    console.log(date.toISOString());
                    let fecha = date.toISOString();
                    fecha = fecha.split("T");
                    info["fecha_de_nacimiento"] = fecha[0];
                    setUserInfo({ ...info });
                  }}
                  withPortal
                  locale='es'
                  value={userInfo.fecha_de_nacimiento}
                  customInput={
                    <TextField
                      label='Fecha de nacimiento'
                      type='text'
                      InputLabelProps={{ shrink: true }}
                      disabled={true}
                    />
                  }></ReactDatePicker>
                <ReactDatePicker
                  fixedHeight='400px'
                  onChange={(date) => {
                    const info = userInfo;
                    console.log(date.toISOString());
                    let fecha = date.toISOString();
                    fecha = fecha.split("T");
                    info["fecha_de_ingreso"] = fecha[0];
                    setUserInfo({ ...info });
                  }}
                  withPortal
                  locale='es'
                  value={userInfo.fecha_de_ingreso}
                  customInput={
                    <TextField
                      label='Fecha de Ingreso'
                      type='text'
                      InputLabelProps={{ shrink: true }}
                      disabled={true}
                    />
                  }></ReactDatePicker>
              </div>

              <TextField
                sx={{ m: 2 }}
                id='dni'
                label='DNI'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.dni}
                onChange={(e) => handleChange(e, "dni")}
              />
              <TextField
                sx={{ m: 2 }}
                id='cuil'
                label='CUIL'
                InputLabelProps={{ shrink: true }}
                type='text'
                variant='outlined'
                value={userInfo.cuil}
                onChange={(e) => handleChange(e, "cuil")}
              />
              <TextField
                sx={{ m: 2 }}
                id='telefono'
                label='Telefono'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.telefono}
                onChange={(e) => handleChange(e, "telefono")}
              />
              <TextField
                sx={{ m: 2 }}
                id='correo'
                label='Correo electronico'
                type='email'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.email}
                onChange={(e) => handleChange(e, "email")}
              />
              {usuario.rol === "administrador" && (
                <FormControlLabel
                  sx={{ margin: "20px" }}
                  control={
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label='Administrador'></FormControlLabel>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* //Segundo acordion de datos */}
        <Accordion Accordion>
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
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.calle}
                onChange={(e) => handleChange(e, "calle")}
              />
              <TextField
                sx={{ m: 2 }}
                id='altura'
                label='Altura'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.altura}
                onChange={(e) => handleChange(e, "altura")}
              />
              <TextField
                sx={{ m: 2 }}
                id='codig opostal'
                label='Codigo postal'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.codigo_postal}
                onChange={(e) => handleChange(e, "codigo_postal")}
              />
              <TextField
                sx={{ m: 2 }}
                id='torre'
                label='Torre'
                variant='outlined'
                InputLabelProps={{ shrink: true }}
                value={userInfo.torre}
                onChange={(e) => handleChange(e, "torre")}
              />
              <TextField
                sx={{ m: 2 }}
                id='piso'
                label='Piso'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.piso}
                onChange={(e) => handleChange(e, "piso")}
              />
              <TextField
                sx={{ m: 2 }}
                id='departamento'
                label='Departamento'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.departamento}
                onChange={(e) => handleChange(e, "departamento")}
              />
              <TextField
                sx={{ m: 2 }}
                id='localidad'
                label='Localidad'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.localidad}
                onChange={(e) => handleChange(e, "localidad")}
              />
              <TextField
                sx={{ m: 2 }}
                id='provincia'
                label='Provincia'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.provincia}
                onChange={(e) => handleChange(e, "provincia")}
              />
              <TextField
                sx={{ m: 2 }}
                id='pais'
                label='Pais'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.pais}
                onChange={(e) => handleChange(e, "pais")}
              />
              <TextField
                sx={{ m: 2 }}
                id='diasVacaciones'
                label='Dias Vacaciones'
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                value={userInfo.dias_de_vacaciones}
                onChange={(e) => handleChange(e, "dias_de_vacaciones")}
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
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              handleSubmit();
            }}>
            Guardar
            <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        </Box>
      </Box>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </Container>
  );
};

export default PerfilUsuario;
