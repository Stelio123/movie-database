// Header
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header () {

    return (
        <header>
            <h1><Link to="/"><img src=""  alt="SNOS MOVIES" /></Link></h1>
            <Nav />
        </header>
    );
}

export default Header;