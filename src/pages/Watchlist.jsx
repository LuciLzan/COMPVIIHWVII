import MovieGrid from '../components/MovieGrid';

function Watchlist({favorites,setFavorites}) {

    return (
        <main className="main-content">
            <div className="content-header">
                <h2>Watchlist</h2>
                <p>Movies currently on your watchlist:</p>
            </div>
            {favorites.length > 0 ? (
                <MovieGrid favorites={favorites} setFavorites={setFavorites} movies={favorites} />
            ) : (
                <div className="empty-state">
                    <p>No favorite movies yet. Start adding some from the home page!</p>
                </div>
            )}
        </main>
    );
};

export {Watchlist}