import { getYear } from '../utilities/utilities';
// import { Route } from 'react-router-dom';
//use window.loaction??

const Footer = () => (
    <footer>

        {/* <div class="social-media">		
			<Route path ="https://www.facebook.com/bnwcatt" href="https://www.facebook.com/bnwcatt"/>
				<i class="fab fa-facebook-f"></i>	

			<Route href="https://www.google.com/"/>
				<i class="fab fa-google"></i>
					
			<Route href="https://twitter.com/?lang=en"/>
				<i class="fab fa-twitter"></i>		
		</div> */}

        <div className="education-note">
            <p>For Educational Purposes Only</p>
            <p>&copy; {getYear()} Stelianos Langaditis</p>
        </div>

    </footer>
);

export default Footer;