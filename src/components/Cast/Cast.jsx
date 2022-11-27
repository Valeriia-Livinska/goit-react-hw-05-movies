import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'helpers/Api';
import { CastList, CastItem, CastCard, CastName } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch {
        console.log('error');
      }
    }
    getMovieCast();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <CastList>
      {cast.map(({ character, name, profile_path }) => {
        const imageUrl =
          profile_path !== null
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';
        return (
          <CastItem key={name}>
            <CastCard src={imageUrl} alt={name} />
            <CastName>{name}</CastName>
            <p>Character: </p>
            <p>{character}</p>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
