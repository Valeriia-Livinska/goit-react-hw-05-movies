import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'helpers/Api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Input, SearchButton, SearchForm } from 'pages/movies/Movies.styled';
import { BsSearch } from 'react-icons/bs';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const query = params.get('query') ?? '';

    if (!query) {
      return;
    }

    async function getMoviesByName() {
      try {
        const data = await fetchMovieByName(query);

        setSearchMovies(data.results);
      } catch {
        console.log('error');
      }
    }
    getMoviesByName();
  }, [params]);

  const handleSubmit = e => {
    e.preventDefault();
    const nextParams = query !== '' ? { query } : {};
    setParams(nextParams);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <BsSearch size="2em" />
        </SearchButton>

        <Input
          type="text"
          name="input"
          autocomplete="off"
          autoFocus
          placeholder="Search movie by name"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </SearchForm>
      {searchMovies.length > 0 && <MoviesGallery movies={searchMovies} />}
    </>
  );
};

export default Movies;
