import React from 'react';
import { Icon } from '../Icons';
import Skeleton from 'react-loading-skeleton';

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
        <HeadingPrimary>{departure || <Skeleton />}</HeadingPrimary>
        <HeadingSecondary>{depatureDate || <Skeleton />}</HeadingSecondary>
      </ListItem>

      <ListItem marginLeft={6}>
        <Icon name="arrow-right" />
      </ListItem>

      <ListItem marginLeft={6}>
        <HeadingPrimary>{destination || <Skeleton />}</HeadingPrimary>
        <HeadingSecondary>{expiryDate || <Skeleton />}</HeadingSecondary>
      </ListItem>
      <ListItem marginLeft={6}>
        <Amount>{amount || <Skeleton />}</Amount>
      </ListItem>
      <ListItem marginLeft={6}>
        <StatusText status={status}>{status || <Skeleton />}</StatusText>
      </ListItem>
    </Container>
  );
};
