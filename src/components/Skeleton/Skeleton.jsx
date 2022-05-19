import { Fragment } from 'react';

import { Container, Header, Bottom, ListItem } from './Skeleton.style';

export const Skeleton = ({ length = 5 }) => {
  return (
    <Fragment>
      {Array.from({ length: length }).map((item, index) => (
        <Container key={index.toString()}>
          {Array.from({ length: 5 }).map((item, index) => (
            <ListItem key={index.toString()}>
              <Header />
              <Bottom />
            </ListItem>
          ))}
        </Container>
      ))}
    </Fragment>
  );
};
