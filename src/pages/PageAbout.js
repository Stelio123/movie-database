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
			</section>

			<section className="tmdb-section">
				<p>This Database uses the TMDb API but is in no way endorsed or supported by TMDb. This website was created for educational purposes only.</p>
			</section>

			<div className="education-note">
            <p>For Educational Purposes Only</p>
            <p>&copy; {getYear()} Stelianos Langaditis</p>
        </div>

			
		</main>
	);
}

export default PageAbout;
