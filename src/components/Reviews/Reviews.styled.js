import styled from 'styled-components';

export const ReviewItem = styled.li`
  padding: 5px;
  border: 1px solid #95b1b0;
  border-radius: 5px;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ReviewAuthor = styled.p`
  font-weight: 600;
`;
