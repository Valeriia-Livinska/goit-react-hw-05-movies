import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MoviesItem,
  MoviesList,
  MovieCard,
  MovieName,
} from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <main>
      <MoviesList>
        {movies.map(({ id, poster_path, title, name }) => {
          const imageUrl =
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';
          return (
            <MoviesItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <MovieCard src={imageUrl} alt={title || name} />
                <MovieName>{title || name}</MovieName>
              </Link>
            </MoviesItem>
          );
        })}
      </MoviesList>
    </main>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
