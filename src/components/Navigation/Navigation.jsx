import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../Button';
import formatLocationString from '../../helpers/formatLocation';

import { Container, Title, HeaderNav } from './Navigation.style';

export const Navigation = () => {
  const { pathname } = useLocation();
  const location = formatLocationString(pathname);

  return (
    <Container>
      <HeaderNav>
        <Title>{location}</Title>

        <Button>Create New</Button>
      </HeaderNav>
    </Container>
  );
};
