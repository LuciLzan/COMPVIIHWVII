import {createContext, useState, useContext, useEffect} from 'react';


//Via resource 2 and 3

// 1. Create the Context
const WatchlistContext = createContext();

// 2. Create a custom hook for consuming the Context
export function useWatchlist() {
    const context = useContext(WatchlistContext);
    if (!context) {
        throw new Error('useWatchlist must be used within WatchlistProvider');
    }
    return context;
};

// 3. Create the Provider component
export function WatchlistProvider({ children }) {
    // Initialize state from localStorage
    const [watchlist, setWatchlist] = useState(() => {
        const saved = localStorage.getItem('watchlist');
        return saved ? JSON.parse(saved) : [];
    });

    // 1. Save to localStorage whenever watchlist changes
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (movie) => {
        if (!watchlist.some(m => m.id === movie.id)) {
            setWatchlist(prev => [...prev, movie]);
        }
    };

    const removeFromWatchlist = (movieId) => {
        setWatchlist(prev => prev.filter(movie => movie.id !== movieId));
    };

    const isOnWatchlist = (movieId) => {
        return watchlist.some(movie => movie.id === movieId);
    };

    const value = {
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isOnWatchlist
    };

    return (
        <WatchlistContext.Provider value={value}>
            {children}
        </WatchlistContext.Provider>
    );
};