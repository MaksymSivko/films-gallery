import styled from 'styled-components';

export const PageTitle = ({ title }) => {
  return <TitleWrapper>{title}</TitleWrapper>;
};

const TitleWrapper = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  font-size: 2vw;
  padding: 15px 0;
  color: #ffffff;

  @media (max-width: 1000px) {
    font-size: 6.4vw;
  }
`;
