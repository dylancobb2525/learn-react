import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';

const Layout = () => {
    return (
        <>
        <Header />
        <Navigation />
        <Outlet />
        
        <p>My Footer</p>
        </>
    );
};

export default Layout;