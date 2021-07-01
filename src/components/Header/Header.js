import React from 'react';
import { Container, Span, UnderLine } from './style';

export const Header = () => {
  return (
    <>
      <Container onClick={() => window.scroll(0, 0)}>
        <Span>Films Gallery</Span>
      </Container>
      <UnderLine id="gotoup" />

      {/* <GoUp href="#gotoup">go up</GoUp> */}
    </>
  );
};
