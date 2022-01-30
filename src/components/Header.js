// Header
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Nav from './Nav';

function Header () {

    const [navOpen, setNavOpen] =useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen)
    }


    return (
        <header>
            <div className='head'>
                <div className="logo">
                    <Link to= '/'><svg xmlns="http://www.w3.org/2000/svg" width="106.916" height="48" viewBox="0 0 106.916 48">
                        <g id="logo" transform="translate(-45 -3)">
                            <text id="SNOS_MOVIES" data-name="SNOS
                                MOVIES" transform="translate(46 27)" fill="#fff" stroke="#0f0b34" strokeWidth="1" fontSize="24" fontFamily="HelveticaNeue-Bold, Helvetica Neue" fontWeight="700"><tspan x="0" y="0">SNOS</tspan><tspan x="0" y="18">MOVIES</tspan></text>
                                <path id="Icon_awesome-trademark" data-name="Icon awesome-trademark" d="M3.219,6.75H.148A.149.149,0,0,0,0,6.9v.532a.149.149,0,0,0,.148.148H1.2v2.976a.149.149,0,0,0,.148.148h.671a.149.149,0,0,0,.148-.148V7.579H3.218a.149.149,0,0,0,.148-.148V6.9A.147.147,0,0,0,3.219,6.75Zm4.687,3.792-.3-3.657a.148.148,0,0,0-.148-.136H6.653a.148.148,0,0,0-.14.1L5.973,8.42c-.089.254-.2.652-.2.652H5.763s-.11-.4-.2-.652L5.023,6.85a.149.149,0,0,0-.14-.1H4.075a.15.15,0,0,0-.148.136l-.3,3.657a.148.148,0,0,0,.148.161h.673a.149.149,0,0,0,.148-.138l.112-1.642a5.849,5.849,0,0,0,0-.663h.011s.132.415.221.663l.379,1.046a.148.148,0,0,0,.14.1H6.08a.148.148,0,0,0,.14-.1L6.6,8.923c.089-.248.221-.663.221-.663h.011a5.848,5.848,0,0,0,0,.663l.112,1.642a.149.149,0,0,0,.148.138h.666A.149.149,0,0,0,7.906,10.542Z" transform="translate(144.01 28.416)" fill="#fff"/>
                        </g>
                    </svg></Link>
                </div>
                <div id="site-navigation" className={navOpen ? 'show' : 'hide'} >
                    <button className="btn-main-nav" onMouseDown={(e) => {e.preventDefault(); }}
                        onClick={showHideNav}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                    </button>
                    <Nav showHideNav={showHideNav} />       
                </div>                
       

                <div className="header-nav">
                    <ul>
                        <li><NavLink className="head-link" to="/">Home</NavLink></li>
                        <li><NavLink className="head-link" to="about">About</NavLink></li> 
                        <li><NavLink className="head-link" to="favourites">Favourites</NavLink></li>
                    </ul>
                </div>			
            </div>
           
        </header>
    );
}

export default Header;