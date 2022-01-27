// Page - About
import React from 'react';
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import { getYear } from '../utilities/utilities';

function PageAbout() {

	useEffect(() => {
		document.title  = `${appTitle} - About`;
	},[]);

	return (
		<main>
			<section className="about-section">
				<h2>Welcome to SNOS MOVIES!</h2>
				<p>SNOS MOVIES is an online database related to all movies old and new.</p>
				<p>This Database uses the TMDb API but is in no way endorsed or supported by TMDb. This website was created for educational purposes only.</p>
				<section class="tmdb-section">
        			<img class="tmdb-logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="TMDb logo" />
     			</section>
            	<p>&copy; {getYear()} Stelianos Langaditis</p>
			</section>	
		</main>
	);
}

export default PageAbout;
