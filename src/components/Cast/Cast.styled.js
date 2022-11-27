import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  max-width: 200px;
  border: 1px solid #95b1b0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastCard = styled.img`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
`;

export const CastName = styled.p`
  font-weight: 600;
  text-align: center;
`;
