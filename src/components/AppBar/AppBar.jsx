import { Header, HeaderNavLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <HeaderNavLink to="/">Home</HeaderNavLink>
        <HeaderNavLink to="/movies">Movies</HeaderNavLink>
      </nav>
    </Header>
  );
};
