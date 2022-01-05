// Header

import { Link } from 'react-router-dom';
import Nav from './Nav';
// import { appTitle } from '../globals/globals';

const Header = () => {

    return (
        <header>
            <h1><Link to="/home"><img src="" className="footer-logo" alt="SNOS MOVIES" />
</Link></h1>
            <Nav />
        </header>
    );
}

export default Header;