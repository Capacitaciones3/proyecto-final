import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Backdrop from '@mui/material/Backdrop';

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
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon sx={{ transform: 'rotate(-25deg)' }}/>
              </Badge>
            </IconButton>
            <Badge badgeContent={4} color="primary" variant='dot'>
              <Button color='inherit'>
                <Avatar variant="rounded">
                  OP
                </Avatar>
              </Button>
            </Badge>
          </Toolbar>
        </AppBar>
        <Drawer
          style={{ height: '200px', zIndex: '99' }}
          variant="temporary"
          anchor="bottom"
          open={open}
          onClose={handleClose}
        >
          <List>
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