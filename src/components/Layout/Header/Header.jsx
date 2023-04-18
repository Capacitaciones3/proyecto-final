import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { AutenticacionContext } from "../../../contexts/Autenticacion";
import LogoutIcon from "@mui/icons-material/Logout";

// css
import "./Header.css";

const Header = () => {
  const avatar = (
    <Avatar>
      <AccountCircleIcon />
    </Avatar>
  );

  const navigate = useNavigate();
  const { cerrarSesion, usuario, isLogged } = useContext(AutenticacionContext);

  const getTitle = () => {
    const query = new URLSearchParams(window.location.search);
    return query.get("title");
  };

  const itemListHam = [
    {
      icono: <BarChartIcon color="primary" />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Cargar Licencias",
      path: "/licencias",
    },
    usuario.rol === "administrador" && {
      icono: <GroupsRoundedIcon color="error" />,
      text: "Administrar Usuarios",
      path: "/usuarios",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text:
        usuario.rol === "administrador"
          ? "Mantenimiento de Calendario"
          : "Feriados",
      path: "/calendario",
    },
  ];
  const notificationList = [
    {
      icono: <BarChartIcon />,
      text: "Dashboard",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Cargar licencias",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Administrar usuarios",
    },
  ];

  // El perfil tendria que traer la data de mi perfil
  // Hay que tener por params el id o algo asi
  const userList = [
    {
      icono: <AccountCircleIcon />,
      text: "Perfil",
      path: "/perfil",
    },
  ];

  const handleSession = () => {
    cerrarSesion();
    navigate("/login");
  };

  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <DropDownMenu
            name="ham"
            botonIcono={<MenuIcon />}
            listItems={itemListHam}
          />
          <h2 style={{ width: "100%", textAlign: "center" }}>{getTitle()}</h2>
          <nav className="nav-header">
            <DropDownMenu
              name="notification"
              botonIcono={<NotificationsIcon />}
              listItems={notificationList}
            />
            {/* aca tenemos que poner un item personalizado para cerrar sesion ya que se comporta distinto al resto de items que solo redirije */}
            <DropDownMenu name="user" botonIcono={avatar} listItems={userList}>
              <MenuItem
                onClick={() => handleSession()}
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <LogoutIcon /> cerrar sesión
              </MenuItem>
            </DropDownMenu>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
