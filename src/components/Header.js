// Header
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

function Header () {

    const [navOpen, setNavOpen] =useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen)
    }

    const desktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }

    useEffect(()=>{
        let mediaQuery = window.matchMedia('(min-width: 320px)');
        mediaQuery.addListener(desktop);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeListener(desktop);
    },[]);

    return (
        <header>
            <h1><NavLink to="/"><img src=""  alt="SNOS MOVIES" /></NavLink></h1>
            <button className="btn-main-nav" 
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={showHideNav}>
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                <span className="sr-only">Menu</span>
            </button>
            <Nav />
        </header>
    );
}

export default Header;