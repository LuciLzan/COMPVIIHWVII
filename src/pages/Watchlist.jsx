import MovieGrid from '../components/MovieGrid';
import {useWatchlist} from "../contexts/MovieContext.jsx";

function Watchlist({favorites,setFavorites}) {

    let {watchlist} = useWatchlist()

    return (
        <main className="main-content">
            <div className="content-header">
                <h2>Watchlist</h2>
                <p>Movies currently on your watchlist:</p>
            </div>
            {watchlist.length > 0 ? (
                <MovieGrid favorites={favorites} setFavorites={setFavorites} movies={watchlist} />
            ) : (
                <div className="empty-state">
                    <p>No watchlisted movies yet. Start adding some from the home page!</p>
                </div>
            )}
        </main>
    );
};

export {Watchlist}