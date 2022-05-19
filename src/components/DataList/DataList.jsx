import React from 'react';
import { Icon } from '../Icons';

import {
  Amount,
  ListItem,
  ShirtText,
  Container,
  ShipHeader,
  StatusText,
  ImportWrapper,
  HeadingPrimary,
  HeadingSecondary,
} from './DataList.style';

export const DataList = ({ departure, status, destination, amount, expiryDate, depatureDate }) => {
  return (
    <Container>
      <ListItem>
        <div className="list--item__container">
          <Icon name="bigship" />
          <ShipHeader>SF-162F318</ShipHeader>
          <ShirtText>Plain Shirts</ShirtText>
        </div>
        <ImportWrapper>
          <p>IMPORT</p>
        </ImportWrapper>
      </ListItem>
      <ListItem marginLeft={6}>
        <HeadingPrimary>{departure}</HeadingPrimary>
        <HeadingSecondary>{depatureDate}</HeadingSecondary>
      </ListItem>

      <ListItem marginLeft={6}>
        <Icon name="arrow-right" />
      </ListItem>

      <ListItem marginLeft={6}>
        <HeadingPrimary>{destination}</HeadingPrimary>
        <HeadingSecondary>{expiryDate}</HeadingSecondary>
      </ListItem>
      <ListItem marginLeft={6}>
        <Amount>{amount}</Amount>
      </ListItem>
      <ListItem marginLeft={6}>
        <StatusText status={status}>{status}</StatusText>
      </ListItem>
    </Container>
  );
};
