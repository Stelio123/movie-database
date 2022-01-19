// Nav

import { NavLink } from 'react-router-dom';

function Nav() {

    
    return (
            <nav className="main-nav" >
                <ul>
                    <li><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                    <li><NavLink className="nav-link" to="/favourites">Favourites</NavLink></li>
                </ul>
            </nav>  


    );

};

export default Nav;