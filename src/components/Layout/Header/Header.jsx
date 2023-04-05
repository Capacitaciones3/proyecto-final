import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Badge, { BadgeProps } from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Backdrop from '@mui/material/Backdrop';

import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import './Header.css';

const StyledBadgeAvatar = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    transform: 'translateX(-3px)'
  }
}));

const StyledBadgeNotifications = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    transform: 'translate(-2px, -15px)',
    fontSize: '10px',
    with: '5px',
    height: '16px'
  },
}));

const Header = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <div style={{ display: 'flex' }}>
        <AppBar position='static' sx={{ backgroundColor: '#fafafa' }}>
          <Toolbar>
            <IconButton edge='start' color='#C8C7C7' aria-label="menu" onClick={handleOpen}>
              <MenuIcon fontSize='large' />
            </IconButton>
            <Typography variant="h4" align='center' style={{ flexGrow: 1, color: '#797979' }}>
              Adviters-App
            </Typography>
            <IconButton color="#C8C7C7" aria-label="notifications">
              <StyledBadgeNotifications badgeContent={2} color='error'>
                <NotificationsIcon sx={{ transform: 'rotate(-25deg)' }} fontSize='large'/>
              </StyledBadgeNotifications>
            </IconButton>
            <Stack direction="row" spacing={2}>
              <StyledBadgeAvatar
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Button color='inherit'>
                  <Avatar variant="rounded">
                    OP
                  </Avatar>
                </Button>
              </StyledBadgeAvatar>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer
          style={{ height: '500px', zIndex: '99' }}
          variant="temporary"
          anchor="top"
          open={open}
          onClose={handleClose}
        >
          <List className='sandwich'>
            <ListItem button>
              <ListItemText primary="Item 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Item 2" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Item 3" />
            </ListItem>
          </List>
        </Drawer>
        {open && <Backdrop style={{ zIndex: '98', color: '#fff' }} open={open} onClick={handleClose} />}
      </div>
    );
}

export default Header;