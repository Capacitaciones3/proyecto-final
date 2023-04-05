import { Typography, Link } from '@mui/material';

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