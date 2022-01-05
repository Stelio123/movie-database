// Nav

import { Link } from 'react-router-dom';

const Nav = () => {

    function blur(e){
        e.target.blur();
    }
    
    return (
        <nav className="main-nav" onClick={blur}>
            <ul>
                <li><Link to="/" exact>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/favourite">Favourite</Link></li>
            </ul>
        </nav>
    );

};

export default Nav;