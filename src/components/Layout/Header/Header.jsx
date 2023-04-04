import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundColor: '#fafafa'
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: '#C8C7C7' }} />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#797979', textAlign: 'center' }}>
            Adviters-App
          </Typography>
          <Button sx={{
            background: '#C8C7C7',
            color: '#fafafa'
          }}>OP</Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Header;