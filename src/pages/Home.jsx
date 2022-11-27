import { useState, useEffect } from 'react';
import { fetchTrending } from 'helpers/Api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovie() {
      try {
        const data = await fetchTrending();
        setTrendingMovies(data.results);
      } catch {
        console.log('error');
      }
    }
    getTrendingMovie();
  }, []);

  return <MoviesGallery movies={trendingMovies} />;
};

export default Home;
