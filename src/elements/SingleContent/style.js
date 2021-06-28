import styled from 'styled-components/macro';

export const SingleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: 5px;
  margin: 0 auto;
  background-color: #282c34;
  border-radius: 10px;
  position: relative;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;

    color: black;
  }

  @media (max-width: 675px) {
    max-width: 300px;
  }
`;

export const CardImage = styled.img`
  border-radius: 10px;
`;

export const CardTitle = styled.b`
  width: 100%;
  text-align: center;
  font-size: 17px;
  padding: 8px 0;
`;

export const CardMedia = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 3px 2px;
`;

// export const CardDate = styled(CardMedia);
