import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import styled from 'styled-components';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/movieDatails/MovieDetails'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const Wrapper = styled.div`
  background: linear-gradient(
    to right top,
    #8bd1f6,
    #abd8fb,
    #c6dffd,
    #dce8fe,
    #eef1fe,
    #eff3fe,
    #f0f5ff,
    #f1f7ff,
    #e0f3ff,
    #cbeffc,
    #b6edf3,
    #a5e9e4
  );
  min-height: 100vh;
`;

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </Wrapper>
  );
};
