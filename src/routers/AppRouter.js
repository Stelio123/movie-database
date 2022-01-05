// AppRouter

// Development Components
import { BrowserRouter as Routes, Route } from 'react-router-dom';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourite from '../pages/PageFavourite';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    // <Router>
      <div className="wrapper">
        <Header />
          <main>
            <Routes>
              <Route path="/" index element={<PageHome />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/favourite" element={<PageFavourite />} />
              <Route><PageNotFound /></Route>
            </Routes>
          </main>
        <Footer />
      </div>
    // </Router>
  );
}

export default AppRouter;


//Page home is it index or exact?