import React,  { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

const StyledBadgeAvatar = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#2E7D32',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    transform: 'translate(6px, 5px)'
  }
}));

const StyledBadgeNotifications = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    transform: 'translate(-2px, -15px)',
    fontSize: '10px',
    minWidth: '12px',
    height: '15px',
    backgroundColor: '#FF0000'
  },
}));

const Header = () => {

  const [actionsMenu, setActionsMenu] = useState({
    anchorElement: null,
    open: false
  });
  const [notificationsMenu, setNotificationsMenu] = useState({
    anchorElement: null,
    open: false
  });
  const [settingsMenu, setSettingsMenu] = useState({
    anchorElement: null,
    open: false
  });

  const [admin, setAdmin] = useState(false)

  const openMenu = (event, setState) => {
    setState({
      anchorElement: event.currentTarget,
      open: true
    });
  };

  const closeMenu = (setState) => {
    setState({
      anchorElement: null,
      open: false
    });
  };

    return (
      <div style={{ display: 'flex' }}>
        <AppBar position='static' sx={{ backgroundColor: '#fafafa' }}>
          <Toolbar>
            <IconButton edge='start' aria-label="menu" onClick={(ev) => openMenu(ev, setActionsMenu)}>
              <MenuIcon fontSize='large' sx={{ 
                color: '#C8C7C7',
                '&:hover': {
                  color: '#797979'
                }
              }} />
            </IconButton>
            <Typography variant="h4" align='center' component="h1" style={{ flexGrow: 1, color: '#797979' }}>
              Adviters-App
            </Typography>
            <IconButton aria-label="notifications" sx={{
                '&:hover svg': {
                  fill: '#797979'
                }
              }}
              onClick={(ev) => openMenu(ev, setNotificationsMenu)}
            >
              <StyledBadgeNotifications badgeContent={2} color='error'>
                <NotificationsIcon sx={{ 
                  transform: 'rotate(-20deg)', 
                  color: '#C8C7C7'
                  }} 
                  fontSize='large'
                />
              </StyledBadgeNotifications>
            </IconButton>
            <Stack direction="row" spacing={2}>
              <StyledBadgeAvatar
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Button color='inherit' size='small' style={{ 
                  width: '40px', 
                  height: '40px',  
                  minWidth: '40px', 
                  marginLeft: '10px'
                  }}
                  onClick={(ev) => openMenu(ev, setSettingsMenu)}
                >
                  <Avatar variant="rounded" sx={{
                    '&:hover': {
                        backgroundColor: '#797979'
                      }
                    }}
                  >
                    OP
                  </Avatar>
                </Button>
              </StyledBadgeAvatar>
            </Stack>
          </Toolbar>
        </AppBar>

        <Menu
          anchorEl={actionsMenu.anchorElement}
          open={actionsMenu.open}
          onClose={() => closeMenu(setActionsMenu)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => closeMenu(setActionsMenu)} sx={{
            width: '300px'
          }}>
            <DashboardOutlinedIcon />
            <Typography sx={{ ml: '20px' }}>Dashboard</Typography>
          </MenuItem>

          <MenuItem onClick={() => closeMenu(setActionsMenu)}>
            <ListAltOutlinedIcon />
            <Typography sx={{ ml: '20px' }}>Cargar licencias</Typography>
          </MenuItem>

          <MenuItem onClick={() => closeMenu(setActionsMenu)} sx={{ display: admin ? "flex" : "none" }}>
            <SupervisorAccountOutlinedIcon />
            <Typography sx={{ ml: '20px' }}>Administrar usuarios</Typography>
          </MenuItem>
          <MenuItem onClick={() => closeMenu(setActionsMenu)} sx={{ display: admin ? "flex" : "none" }}>
            <EditCalendarOutlinedIcon />
            <Typography sx={{ ml: '20px' }}>Mantenimiento de calendario</Typography>
          </MenuItem>

          <MenuItem onClick={() => closeMenu(setActionsMenu)}  sx={{ display: admin ? "none" : "flex" }}>
            <SentimentVerySatisfiedOutlinedIcon />
            <Typography sx={{ ml: '20px' }}>Feriados</Typography>
          </MenuItem>

        </Menu>

        <Menu
          anchorEl={notificationsMenu.anchorElement}
          open={notificationsMenu.open}
          onClose={() => closeMenu(setNotificationsMenu)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

            <MenuItem onClick={() => closeMenu(setNotificationsMenu)} sx={{
              width: '300px',
              backgroundColor: '#1976D214',
              display: admin ? "none" : "flex"
            }}>
              <EmailOutlinedIcon />
              <Typography sx={{ ml: '20px' }}>Tu solicitud ha sido aprobada</Typography>
            </MenuItem>
            <MenuItem onClick={() => closeMenu(setNotificationsMenu)} sx={{ display: admin ? "none" : "flex" }}>
              <DraftsOutlinedIcon />
              <Typography sx={{ ml: '20px' }}>Tu solicitud ha sido aprobada</Typography>
            </MenuItem>
            <MenuItem onClick={() => closeMenu(setNotificationsMenu)} sx={{ display: admin ? "none" : "flex" }}>
              <DraftsOutlinedIcon />
              <Typography sx={{ ml: '20px' }}>Nuevo feriado</Typography>
            </MenuItem>

            <MenuItem onClick={() => closeMenu(setNotificationsMenu)} sx={{
              width: '300px',
              backgroundColor: '#1976D214',
              display: admin ? "flex" : "none"
            }}>
              <EmailOutlinedIcon />
              <Typography sx={{ ml: '20px' }}>Nueva aprobación pendiente</Typography>
            </MenuItem>
            <MenuItem onClick={() => closeMenu(setNotificationsMenu)}  sx={{ display: admin ? "flex" : "none" }}>
              <DraftsOutlinedIcon />
              <Typography sx={{ ml: '20px' }}>Nuevo feriado agregado</Typography>
            </MenuItem>

        </Menu>

        <Menu
          anchorEl={settingsMenu.anchorElement}
          open={settingsMenu.open}
          onClose={() => closeMenu(setSettingsMenu)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => closeMenu(setSettingsMenu)} sx={{
            width: '300px'
          }}>
            <Typography>Mi perfil</Typography>
          </MenuItem>
          <MenuItem onClick={() => closeMenu(setSettingsMenu)}>
            <Typography>Cerrar sesión</Typography>
          </MenuItem>
        </Menu>

      </div>
    );
}

export default Header;