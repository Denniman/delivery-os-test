import React from 'react';
import { Button } from '../Button';

import { Container, Title, HeaderNav } from './Navigation.style';

export const Navigation = () => {
  return (
    <Container>
      <HeaderNav>
        <Title>Quotes</Title>

        <Button>Create New</Button>
      </HeaderNav>
    </Container>
  );
};
