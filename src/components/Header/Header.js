import React from 'react';
import { Container, UnderLine, Span } from './style';

export const Header = () => {
  return (
    <>
      <Container onClick={() => window.scroll(0, 0)}>
        <Span>Films Gallery</Span>
      </Container>
      <UnderLine />
    </>
  );
};
