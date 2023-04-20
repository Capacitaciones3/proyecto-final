import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { useNavigate } from "react-router-dom";
import { AutenticacionContext } from "../../../contexts/Autenticacion";
import LogoutIcon from "@mui/icons-material/Logout";
import imagen from "./shrek.jpg";

// css
import "./Header.css";

const Header = () => {
  const [backdrop, setBackdrop] = useState(false);
  const avatar = (
    <Avatar>
      <img src={imagen} alt='' width={"70px"} />
    </Avatar>
  );

  //foto?(<img src={foto} alt='' width={"70px"}/>):(<div style={{backgroundColor: "blue", width: "50px", height: "50px",}}></div>)

  const navigate = useNavigate();
  const { cerrarSesion, usuario, isLogged } = useContext(AutenticacionContext);

  const getTitle = () => {
    const query = new URLSearchParams(window.location.search);
    return query.get("title");
  };

  const listItemHamAdmin = [
    {
      icono: <BarChartIcon color='primary' />,
      text: "Dashboard",
      path: "/",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Cargar Licencias",
      path: "/licencias",
    },
    {
      icono: <GroupsRoundedIcon color='error' />,
      text: "Administrar Usuarios",
      path: "/usuarios",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Mantenimiento de Calendario",
      path: "/calendario",
    },
  ];

  const listItemHamUser = [
    {
      icono: <BarChartIcon color='primary' />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Cargar Licencias",
      path: "/licencias",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Feriados",
      path: "/calendario",
    },
  ];

  const notificationList = [
    {
      icono: <MarkChatReadIcon color='success' />,
      text: "Esto es una notificación",
    },
    {
      icono: <MarkChatReadIcon color='success' />,
      text: "Esto también",
    },
  ];

  // El perfil tendria que traer la data de mi perfil
  // Hay que tener por params el id o algo asi
  const userList = [
    {
      icono: (
        <Avatar>
          <img src={imagen} alt='' width={"70px"} />
        </Avatar>
      ),
      text: "Mi perfil",
      path: "/perfil",
    },
  ];

  const handleSession = () => {
    cerrarSesion();
    navigate("/login");
  };

  const handleOpen = (e) => {
    setBackdrop(true);
  };

  const handleClose = (e) => {
    setBackdrop(false);
  };

  return (
    <>
      <AppBar position='fixed' color='transparent'>
        <Toolbar sx={{ backgroundColor: "white" }}>
          <DropDownMenu
            name='ham'
            botonIcono={<MenuIcon />}
            listItems={
              usuario.rol === "Supervisor" ? listItemHamAdmin : listItemHamUser
            }
          />
          <h2 style={{ width: "100%", textAlign: "center", color: "#616161" }}>
            {getTitle()}
          </h2>
          <nav className='nav-header'>
            <DropDownMenu
              name='notification'
              botonIcono={<NotificationsIcon />}
              listItems={notificationList}
            />
            {/* aca tenemos que poner un item personalizado para cerrar sesion ya que se comporta 
            distinto al resto de items que solo redirije */}
            <DropDownMenu name='user' botonIcono={avatar} listItems={userList}>
              <MenuItem
                onClick={() => handleSession()}
                sx={{
                  display: "flex",
                  gap: "30px",
                  justifyContent: "center",
                }}>
                <LogoutIcon /> Cerrar sesión
              </MenuItem>
            </DropDownMenu>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
