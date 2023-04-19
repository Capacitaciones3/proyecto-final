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
import "./PerfilUsuario.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AutenticacionContext } from "../../contexts/Autenticacion";
import { perfilService } from "../../services/perfilService";
import dayjs from "dayjs";
import dayjsPluginUTC from 'dayjs-plugin-utc'

dayjs.extend(dayjsPluginUTC)

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

  let fecha;

  useEffect(() => {
    // si es true traemos los datos del usuario desde llamando a una funcion en service
    isNew
      ? setUserInfo({ ...initData })
      : perfilService(1).then((data) => {
        fecha = data.fecha_de_nacimiento;
        setUserInfo({ ...data })
        console.log(fecha)
      });
  }, []);

  // const defaultValue = dayjs.utc().toDate();

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

  /* const handleSubmit = () => {
    // si es nuevo llamamos a metodo saveUser en service POST()
    if (isNew) {
      // saveUser(userInfo);
    }
    // Si no es nuevo tenemos que hacer un update (PUT)
    else {
      // updateUser();
    }
  }; */

  return (
    <Container
      sx={{
        marginTop: "30px",
        display: "flex",
        border: "0.9px solid #D8D8D8",
        backgroundColor: "rgb(251, 251, 251)",
      }}
    >
      <Box component="form" sx={{ width: "100%", p: 4 }}>
        <Box
          sx={{
            paddingTop: 3,
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Typography color="error.light" variant="h4">
            Mi perfil
          </Typography>
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
          }}
        >
          <img
            src="https://indiehoy.com/wp-content/uploads/2020/12/shrek.jpg"
            alt="Usuario"
            width={150}
          />

          {image && <img src={"./shrek.jpg"} alt="Usuario" width={150} />}
          <input
            hidden
            accept="image/*"
            id="contained-button-file"
            multiple={false}
            type="file"
            onChange={handleImageChange}
            onClick={handleImageChange}
          />
          <label htmlFor="contained-button-file">
            <Button
              sx={{ margin: "5px" }}
              variant="contained"
              color="primary"
              component="span"
            >
              Subir Imagen
            </Button>
          </label>

          <Box
            sx={{
              ml: 5,
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <TextField
              sx={{ m: 2 }}
              id="nombre"
              label="Nombre"
              InputLabelProps={{ shrink: true }}
              type="text"
              variant="outlined"
              value={userInfo.username}
              onChange={(e) => handleChange(e, "username")}
            />

            <TextField
              sx={{ m: 2 }}
              id="password"
              label="nueva password"
              InputLabelProps={{ shrink: true }}
              type="password"
              variant="outlined"
              value={userInfo.password}
              onChange={(e) => handleChange(e, "password")}
            />
            <TextField
              sx={{ m: 2 }}
              id="apellido"
              label="Apellido"
              InputLabelProps={{ shrink: true }}
              type="text"
              variant="outlined"
              value={userInfo.apellido}
              onChange={(e) => handleChange(e, "apellido")}
            />
            <TextField
              sx={{ m: 2 }}
              id="passwordRepetida"
              label="repetir password"
              type="password"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              value={rePassword}
              onChange={(e) => setRePassword(e.value)}
            />
          </Box>
        </Box>
        {/* //Primer acordion de datos */}
        <Accordion sx={{ mb: 3 }} defaultExpanded="true">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Ver más datos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              <TextField
                sx={{ m: 2, width: "220px" }}
                id="supervisor"
                displayEmpty
                select
                InputLabelProps={{ shrink: true }}
                label="Bajo supervision de:"
                variant="filled"
              >
                <MenuItem key="1" value="Administrador">
                  Administrador
                </MenuItem>
                <MenuItem key="2" value="Tincho">
                  Tincho
                </MenuItem>
                <MenuItem key="3" value="Laura">
                  Laura
                </MenuItem>
              </TextField>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{ m: 1, width: "220px" }}
                >
                  <DatePicker
                    label="Fecha de nacimiento"
                    type="date"
                    format="YYYY-MM-DD"
                    defaultValue={dayjs.utc(usuario.fecha_de_nacimiento)}


                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{ m: 1, width: "220px" }}
                >
                  <DatePicker
                    label="Fecha de ingreso"
                    id="fechaingreso"
                    type="date"
                    variant="outlined"
                    format="DD-MM-YYYY"
                    defaultValue={new Date(userInfo.fecha_de_ingreso)}
                  // value={new Date(userInfo.fecha_de_ingreso)}
                  // onChange={(e) => handleChange(e, "fecha_de_ingreso")}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                sx={{ m: 2 }}
                id="dni"
                label="DNI"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.dni}
                onChange={(e) => handleChange(e, "dni")}
              />
              <TextField
                sx={{ m: 2 }}
                id="cuil"
                label="CUIL"
                InputLabelProps={{ shrink: true }}
                type="text"
                variant="outlined"
                value={userInfo.cuil}
                onChange={(e) => handleChange(e, "cuil")}
              />
              <TextField
                sx={{ m: 2 }}
                id="telefono"
                label="Telefono"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.telefono}
                onChange={(e) => handleChange(e, "telefono")}
              />
              <TextField
                sx={{ m: 2 }}
                id="correo"
                label="Correo electronico"
                type="email"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
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
                  label="Administrador"
                ></FormControlLabel>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* //Segundo acordion de datos */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Datos personales</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <TextField
                sx={{ m: 2 }}
                id="calle"
                label="Calle"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.calle}
                onChange={(e) => handleChange(e, "calle")}
              />
              <TextField
                sx={{ m: 2 }}
                id="altura"
                label="Altura"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.altura}
                onChange={(e) => handleChange(e, "altura")}
              />
              <TextField
                sx={{ m: 2 }}
                id="codig opostal"
                label="Codigo postal"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.codigo_postal}
                onChange={(e) => handleChange(e, "codigo_postal")}
              />
              <TextField
                sx={{ m: 2 }}
                id="torre"
                label="Torre"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={userInfo.torre}
                onChange={(e) => handleChange(e, "torre")}
              />
              <TextField
                sx={{ m: 2 }}
                id="piso"
                label="Piso"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.piso}
                onChange={(e) => handleChange(e, "piso")}
              />
              <TextField
                sx={{ m: 2 }}
                id="departamento"
                label="Departamento"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.departamento}
                onChange={(e) => handleChange(e, "departamento")}
              />
              <TextField
                sx={{ m: 2 }}
                id="localidad"
                label="Localidad"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.localidad}
                onChange={(e) => handleChange(e, "localidad")}
              />
              <TextField
                sx={{ m: 2 }}
                id="provincia"
                label="Provincia"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.provincia}
                onChange={(e) => handleChange(e, "provincia")}
              />
              <TextField
                sx={{ m: 2 }}
                id="pais"
                label="Pais"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={userInfo.pais}
                onChange={(e) => handleChange(e, "pais")}
              />
              <TextField
                sx={{ m: 2 }}
                id="diasVacaciones"
                label="Dias Vacaciones"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
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
          }}
        >
          <Button variant="contained" color="primary">
            Guardar
            <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PerfilUsuario;
