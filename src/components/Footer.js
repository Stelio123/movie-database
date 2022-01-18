import { getYear } from '../utilities/utilities';

const Footer = () => (
    <footer>
        <div className="education-note">
            <p>For Educational Purposes Only</p>
            <p>&copy; {getYear()} Stelianos Langaditis</p>
        </div>
    </footer>
);

export default Footer;