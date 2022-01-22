// Header
import {useState} from 'react';
// import { NavLink } from 'react-router-dom';
import Nav from './Nav';

function Header () {

    const [navOpen, setNavOpen] =useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen)
    }


    return (
        <header id="site-navigation" className={navOpen ? 'show' : 'hide'}>
           <button className="btn-main-nav" onMouseDown={(e) => {e.preventDefault(); }}
           onClick={showHideNav}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
           </button>
           <Nav showHideNav={showHideNav} />    
        </header>
    );
}

export default Header;