import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  border: 1px solid #95b1b0;
  border-radius: 5px;
  text-align: center;
  background-image: linear-gradient(
    to right,
    #ffffff,
    #eeeff2,
    #dadfe6,
    #c5d1d8,
    #afc3c9,
    #afc3c9,
    #afc3c9,
    #afc3c9,
    #c5d1d8,
    #dadfe6,
    #eeeff2,
    #ffffff
  );
`;

export const HeaderNavLink = styled(NavLink)`
  padding: 10px;
  width: 80px;
  border: 1px solid white;
  border-radius: 5px;
  text-align: center;
  color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #69cfcf;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }

  &.active {
    background-color: #29d3d3;
  }

  :not(:last-child) {
    margin-right: 50px;
  }
`;
