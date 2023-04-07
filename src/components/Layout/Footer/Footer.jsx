import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#fafafa', padding: '20px' }}>
            <Typography variant="body2" color="textSecondary" align="center">
                Developed by{' '}
                <Link color="inherit" href="/">
                    Adviters
                </Link>{' '}
                {new Date().getFullYear()}
            </Typography>
        </footer>
    );
}

export default Footer;