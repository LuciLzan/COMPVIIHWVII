import MovieGrid from '../components/MovieGrid';
import {getPopularMovies} from "../services/movieService.js";
import {useEffect, useState} from "react";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";


function Home({results, favorites,setFavorites}) {


    const [movies, setMovies] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            if(results && results.length > 0) {
                setMovies(results)
            }else {
                setMovies(await getPopularMovies())
            }
        }
        try {
            load()
            setLoading(false)
        }catch(err) {
            setError(err)
        }
    },[results])

    if(loading) return <LoadingSpinner/>
    if(error) return <ErrorMessage message={error}/>

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid favorites={favorites} setFavorites={setFavorites} movies={movies} />
    </main>
  );
}

export default Home;