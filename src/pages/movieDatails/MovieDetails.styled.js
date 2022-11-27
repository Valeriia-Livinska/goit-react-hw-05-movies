import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBackBtn = styled.button`
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #95b1b0;
  border-radius: 5px;
  text-align: center;
  background: white;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #69cfcf;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const MoviePoster = styled.img`
  margin-right: 20px;
  max-width: 300px;
  border-radius: 5px;
`;

export const InfoList = styled.ul`
  display: flex;
`;

export const InfoItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const InfoLink = styled(NavLink)`
  padding: 5px;
  border: 1px solid #95b1b0;
  border-radius: 5px;
  text-align: center;

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
`;
