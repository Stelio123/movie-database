import { getYear } from '../utilities/utilities';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="footer-nav">
        <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/favourite">Favourite</NavLink></li>
            </ul>
            <img src="/images/gsfLogo_version1.png" className="footer-logo" alt="Gold Star Film logo" />
            <ul>
                <li><NavLink to="/" exact>Contact</NavLink></li>
                <li><NavLink to="/">Help Center</NavLink></li>
                <li><NavLink to="/">Media Center</NavLink></li>
        </ul>
        </div>
        <div className="education-note">
            <p>For Educational Purposes Only</p>
            <p>&copy; {getYear()} ceejay.design</p>
        </div>
    </footer>
);

export default Footer;