// Page - Favourite

import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageFavourite = () => {

    useEffect(() => {
		document.title = `${appTitle} - Favourite`;
	}, []);

    return (
        <section>
            <h2>Favourite Page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro, dolorem, quod facere enim voluptate provident quo labore vero repellat nemo animi ad exercitationem rem quos, possimus libero deleniti laudantium?</p>
        </section>
    );

};

export default PageFavourite;