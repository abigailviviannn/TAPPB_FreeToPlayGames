import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Pages
import Anime from "./pages/Anime";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import Fantasy from "./pages/Fantasy";
import LandingPage from "./pages/LandingPage";
import MMORPG from "./pages/MMORPG";
import ProfilePage from "./pages/ProfilePage";
import Racing from "./pages/Racing";
import SciFi from "./pages/SciFi";
import Shooter from "./pages/Shooter";
import Social from "./pages/Social";
import Strategy from "./pages/Strategy";

// Components
import CategoryIcon from '@mui/icons-material/Category';
import GamesIcon from '@mui/icons-material/Games';
import { MdGroup } from 'react-icons/md';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/shooter" element={<Shooter/>} />
          <Route path="/mmorpg" element={<MMORPG/>} />
          <Route path="/anime" element={<Anime/>} />
          <Route path="/strategy" element={<Strategy/>} />
          <Route path="/fantasy" element={<Fantasy/>} />
          <Route path="/scifi" element={<SciFi/>} />
          <Route path="/racing" element={<Racing/>} />
          <Route path="/social" element={<Social/>} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        <footer>
          <NavLink to="/" className="iconWrapper">
            <GamesIcon className="icon" /> Home
          </NavLink>
          <NavLink to="/category" className="iconWrapper">
            <CategoryIcon className="icon" /> Category
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <MdGroup className="icon" /> Profile
          </NavLink>
        </footer>
      </div>
    </Router>
  );
}

export default App;
