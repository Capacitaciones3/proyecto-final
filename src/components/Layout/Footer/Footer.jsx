import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import "./Footer.css"

const Footer = () => {
    return (
    <Container fixed>
        <Typography variant="h6" component="footer" sx={{ flexGrow: 1, color: '#797979', textAlign: 'center' }}>
            Developed by Adviters
        </Typography>
    </Container>
    );
}

export default Footer;