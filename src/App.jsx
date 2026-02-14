import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [favorites, setFavorites] = useState([]);

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        let localFavorites = JSON.parse(localStorage.getItem("favorites"));
        if(favorites.length === 0 && localFavorites && localFavorites.length > 0) {
            setFavorites(localFavorites)
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites])


    return (
    <Router>
      <div className="app">
        <Header setSearchResults={setSearchResults} />
        <Routes>
          <Route path="/" element={<Home results={searchResults} favorites={favorites} setFavorites={setFavorites}/>} />
          <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;