// Nav

import { NavLink } from 'react-router-dom';

function Nav() {

    
    return (
            <nav className="site-navigation" >
                <ul>
                    <li><NavLink className="nav-link" to={"/"} exact>Home</NavLink></li>
                    <li><NavLink className="nav-link" to={"/about"}>About</NavLink></li>
                    <li><NavLink className="nav-link" to={"/favourites"}>Favourites</NavLink></li>
                    <li><NavLink className="nav-link" to="/sort/popular">Popular</NavLink></li>
                    <li><NavLink className="nav-link" to="/sort/top-rated">Top Rated</NavLink></li> 
                    <li><NavLink className="nav-link" to="/sort/now-playing">Now Playing</NavLink></li>
                    <li><NavLink className="nav-link" to="/sort/upcoming">Upcoming</NavLink></li>
                </ul>
            </nav>  


    );

};

export default Nav;