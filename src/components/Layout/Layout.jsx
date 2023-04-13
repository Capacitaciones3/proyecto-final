import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

const Layout = () => {
    return (
        <Stack direction="column" sx={{
            minHeight: '100vh'
        }}>
            <Header />
            <main style={{flex: 1, backgroundColor: '#FBFBFB', paddingTop:'64px'}}>
                <Outlet />
            </main>
            <Footer />
        </Stack>
    );
}

export default Layout;