import styled from 'styled-components/macro';

export const Container = styled.header`
  width: 100%;
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #39445a;
  box-shadow: 0px 1px 5px #000000;
  z-index: 100;
`;

export const Span = styled.span`
  text-transform: uppercase;
  font-size: 5vw;
  color: #ffffff;
  padding: 0 0 15px 0;

  @media (max-width: 1000px) {
    font-size: 6.5vw;
    padding: 15px 0;
  }
`;

export const UnderLine = styled.div`
  width: 100%;
  height: 100%;
  min-height: 6.3vw;
  background: #fff;

  @media (max-width: 1000px) {
    min-height: 10vw;
  }

  @media (max-width: 600px) {
    min-height: 12.5vw;
  }
`;
