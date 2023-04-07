import Typography from '@mui/material/Typography';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#FFFFFF', padding: '20px', borderTop: '0.5px solid #C8C7C7' }}>
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