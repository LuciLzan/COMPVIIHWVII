import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';
import {useEffect, useState} from "react";
import {WatchlistProvider} from "./contexts/MovieContext.jsx";
import {Watchlist} from "./pages/Watchlist.jsx";

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
    <WatchlistProvider>
        <Router>
            <div className="app">
                <Header setSearchResults={setSearchResults} />
                <Routes>
                    <Route path="/" element={<Home results={searchResults} favorites={favorites} setFavorites={setFavorites}/>} />
                    <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
                    <Route path="/watchlist" element={<Watchlist favorites={favorites} setFavorites={setFavorites} />} />
                </Routes>
            </div>
        </Router>
    </WatchlistProvider>
  );
};

export default App;