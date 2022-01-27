import {NavLink} from "react-router-dom";
const Footer = () => (
    <footer>
		<span className='footer-flex'>
			

			<div className='icon-styles'>
				<div className='facebook'>
					<svg xmlns="http://www.w3.org/2000/svg" width="15.242" height="28.458" viewBox="0 0 15.242 28.458">
					<path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M15.852,16.008l.79-5.15H11.7V7.515a2.575,2.575,0,0,1,2.9-2.782h2.247V.348A27.4,27.4,0,0,0,12.863,0c-4.07,0-6.73,2.467-6.73,6.932v3.925H1.609v5.15H6.133v12.45H11.7V16.008Z" transform="translate(-1.609)" fill="snow"/>
					</svg>
				</div>

				<div className='instagram'>
					<svg xmlns="http://www.w3.org/2000/svg" width="24.915" height="24.909" viewBox="0 0 24.915 24.909">
					<path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M12.455,8.306a6.386,6.386,0,1,0,6.386,6.386A6.376,6.376,0,0,0,12.455,8.306Zm0,10.538a4.152,4.152,0,1,1,4.152-4.152,4.16,4.16,0,0,1-4.152,4.152Zm8.137-10.8a1.49,1.49,0,1,1-1.49-1.49A1.486,1.486,0,0,1,20.592,8.045Zm4.23,1.512A7.372,7.372,0,0,0,22.81,4.337a7.42,7.42,0,0,0-5.219-2.012c-2.057-.117-8.221-.117-10.277,0A7.41,7.41,0,0,0,2.094,4.332,7.4,7.4,0,0,0,.082,9.551c-.117,2.057-.117,8.221,0,10.277a7.372,7.372,0,0,0,2.012,5.219,7.43,7.43,0,0,0,5.219,2.012c2.057.117,8.221.117,10.277,0a7.372,7.372,0,0,0,5.219-2.012,7.42,7.42,0,0,0,2.012-5.219c.117-2.057.117-8.215,0-10.272ZM22.165,22.035A4.2,4.2,0,0,1,19.8,24.4c-1.64.65-5.53.5-7.342.5s-5.708.145-7.342-.5a4.2,4.2,0,0,1-2.368-2.368c-.65-1.64-.5-5.53-.5-7.342s-.145-5.708.5-7.342A4.2,4.2,0,0,1,5.112,4.982c1.64-.65,5.53-.5,7.342-.5s5.708-.145,7.342.5A4.2,4.2,0,0,1,22.165,7.35c.65,1.64.5,5.53.5,7.342S22.816,20.4,22.165,22.035Z" transform="translate(0.005 -2.238)" fill="#fff8f8"/>
					</svg>
				</div>

				<div className='twitter'>
					<svg xmlns="http://www.w3.org/2000/svg" width="28.458" height="23.113" viewBox="0 0 28.458 23.113">
					<path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M25.533,9.141c.018.253.018.506.018.758,0,7.71-5.869,16.595-16.595,16.595A16.482,16.482,0,0,1,0,23.876a12.066,12.066,0,0,0,1.408.072,11.681,11.681,0,0,0,7.241-2.492A5.843,5.843,0,0,1,3.2,17.411a7.355,7.355,0,0,0,1.1.09,6.169,6.169,0,0,0,1.535-.2,5.833,5.833,0,0,1-4.677-5.724v-.072a5.874,5.874,0,0,0,2.636.74,5.841,5.841,0,0,1-1.806-7.8,16.579,16.579,0,0,0,12.026,6.1,6.584,6.584,0,0,1-.144-1.336A5.838,5.838,0,0,1,23.962,5.223a11.483,11.483,0,0,0,3.7-1.408A5.817,5.817,0,0,1,25.1,7.028a11.692,11.692,0,0,0,3.359-.9,12.538,12.538,0,0,1-2.925,3.016Z" transform="translate(0 -3.381)" fill="#fff"/>
					</svg>
				</div>
			</div>	

			<div className="footer-nav">
				<ul>
					<li><NavLink className="foot-link" to="/sort/popular">Popular</NavLink></li>
					<li><NavLink className="foot-link" to="/sort/top-rated">Top Rated</NavLink></li> 
					<li><NavLink className="foot-link" to="/sort/now-playing">Now Playing</NavLink></li>
					<li><NavLink className="foot-link" to="/sort/upcoming">Upcoming</NavLink></li>				
				</ul>
			</div>			

		</span>
		

		
		
    </footer>
);

export default Footer;