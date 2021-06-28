import styled from 'styled-components/macro';

export const TrendingContainet = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 675px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
