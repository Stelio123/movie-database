import { getYear } from '../utilities/utilities';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="footer-nav">
        <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/favourite">Favourite</Link></li>
            </ul>
            <img src="" className="" alt="" />
            <ul>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Help Center</Link></li>
                <li><Link to="/">Media Center</Link></li>
        </ul>
        </div>
        <div className="education-note">
            <p>For Educational Purposes Only</p>
            <p>&copy; {getYear()} Stelianos Langaditis</p>
        </div>
    </footer>
);

export default Footer;