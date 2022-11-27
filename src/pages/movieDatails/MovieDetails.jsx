import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'helpers/Api';
import { Box } from 'components/Box';
import {
  InfoList,
  InfoItem,
  InfoLink,
  MoviePoster,
  GoBackBtn,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [oneMovie, setOneMovie] = useState(null);
  const { movieId } = useParams();
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await fetchMovieById(movieId);
        setOneMovie(data);
      } catch {
        console.log('error');
      }
    }
    getMovieDetails();
  }, [movieId]);

  if (!oneMovie) {
    return null;
  }

  const backLinkHref = location.state?.from ?? '/movies';

  const handleGoBack = () => {
    navigate(backLinkHref);
  };

  const { poster_path, title, name, overview, genres, vote_average } = oneMovie;
  const genresList = genres.map(genre => genre.name).join(' ');

  const imageUrl =
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w300${poster_path}`
      : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

  return (
    <>
        <GoBackBtn type="button" onClick={handleGoBack}>
          Go back
        </GoBackBtn>
      <Box display="flex">
        <MoviePoster src={imageUrl} alt={title || name} />
        <Box>
          <h2>{title || name}</h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresList}</p>
        </Box>
      </Box>
      <InfoList>
        <InfoItem>
          <InfoLink to="cast" state={location.state}>
            CAST
          </InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink to="reviews" state={location.state}>
            REVIEWS
          </InfoLink>
        </InfoItem>
      </InfoList>
      <Outlet />
    </>
  );
};

export default MovieDetails;
