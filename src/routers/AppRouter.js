// AppRouter
// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
// Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourite';
// import PageNotFound from '../pages/PageNotFound';
import PageSingleMovie from '../pages/PageSingleMovie';


function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
          <main>
            <Routes>
              <Route path="/" element={<PageHome sort="popular"/>} />
              <Route path="sort/popular" element={<PageHome sort="popular"/>} />
              <Route path="sort/top-rated" element={<PageHome sort="top_rated"/>} />
              <Route path="sort/now-playing" element={<PageHome sort="now_playing"/>} />
              <Route path="sort/upcoming" element={<PageHome sort="upcoming"/>} />
              <Route path="movie/:id" element={<PageSingleMovie />} />
              <Route path="about" element={<PageAbout />} />
              <Route path="favourites" element={<PageFavourites />} />
              {/* <Route><PageNotFound/></Route> */}
            </Routes>
          </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default AppRouter;















