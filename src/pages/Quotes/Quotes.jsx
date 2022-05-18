import React, { useState } from 'react';

import { All } from './components/All';
import { Pending } from './components/Pending';
import { Booked } from './components/Booked';
import { Ready } from './components/Ready';

import {
  Container,
  FilterHeader,
  FilterButton,
  PaginationButton,
  QuotesContent,
  PaginationWrapper,
  PaginationNumberWrapper,
} from './Quotes.style';
import { Icon } from '../../components/Icons';

export const Quotes = () => {
  const [tab, setTab] = useState('All');

  return (
    <Container>
      <FilterHeader>
        <FilterButton
          marginRight={2.5}
          onClick={() => setTab('All')}
          className={tab === 'All' ? 'active-tabs' : 'tabs'}
        >
          All <p className="filter__text">42</p>
        </FilterButton>

        <FilterButton
          marginRight={6}
          onClick={() => setTab('Pending')}
          className={tab === 'Pending' ? 'active-tabs' : 'tabs'}
        >
          Pending <p className="filter__text">31</p>
        </FilterButton>

        <FilterButton
          marginRight={6}
          onClick={() => setTab('Ready')}
          className={tab === 'Ready' ? 'active-tabs' : 'tabs'}
        >
          Ready <p className="filter__text">42</p>
        </FilterButton>

        <FilterButton
          onClick={() => setTab('Booked')}
          className={tab === 'Booked' ? 'active-tabs' : 'tabs'}
        >
          Booked <p className="filter__text">0</p>
        </FilterButton>
      </FilterHeader>

      <QuotesContent>
        {tab === 'All' && <All />}
        {tab === 'Pending' && <Pending />}
        {tab === 'Booked' && <Booked />}
        {tab === 'Ready' && <Ready />}
      </QuotesContent>
      <PaginationWrapper>
        <p>Showing 1-6 of 75 results </p>

        <PaginationNumberWrapper>
          <p>
            <span>1</span>
          </p>
          <p>2</p>
          <p>3</p>
        </PaginationNumberWrapper>
        <p>... 10</p>
        <PaginationButton>
          <p>6</p>
          <div className="divider ml">
            <div>
              <Icon name="vector-up" />
            </div>
            <div>
              <Icon name="vector-down" />
            </div>
          </div>
        </PaginationButton>
      </PaginationWrapper>
    </Container>
  );
};
