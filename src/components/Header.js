// Header

import { NavLink } from 'react-router-dom';
import Nav from './Nav';
// import { appTitle } from '../globals/globals';

const Header = () => {

    return (
        <header>
            <h1><NavLink to="/home"><img src="/images/gsfLogo_version1.png" className="footer-logo" alt="Gold Star Film logo" />
</NavLink></h1>
            <Nav />
        </header>
    );
}

export default Header;