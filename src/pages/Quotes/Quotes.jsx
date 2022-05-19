import React, { useState } from 'react';

import { All } from './components/All';
import { Ready } from './components/Ready';
import { Booked } from './components/Booked';
import { Pending } from './components/Pending';

import {
  Container,
  FilterHeader,
  FilterButton,
  QuotesContent,
  PaginationInput,
  PaginationWrapper,
  PaginationNumberWrapper,
} from './Quotes.style';

export const Quotes = () => {
  const [tab, setTab] = useState('All');

  return (
    <Container>
      <FilterHeader>
        <FilterButton isActive={tab === 'All'} onClick={() => setTab('All')}>
          All <p className="filter__count">42</p>
        </FilterButton>

        <FilterButton isActive={tab === 'Pending'} onClick={() => setTab('Pending')}>
          Pending <span className="filter__count">31</span>
        </FilterButton>

        <FilterButton isActive={tab === 'Ready'} onClick={() => setTab('Ready')}>
          Ready <p className="filter__count">42</p>
        </FilterButton>

        <FilterButton isActive={tab === 'Booked'} onClick={() => setTab('Booked')}>
          Booked <p className="filter__count">0</p>
        </FilterButton>
      </FilterHeader>

      <QuotesContent>
        {tab === 'All' && <All />}
        {tab === 'Ready' && <Ready />}
        {tab === 'Booked' && <Booked />}
        {tab === 'Pending' && <Pending />}
      </QuotesContent>
      <PaginationWrapper>
        <p>Showing 1-6 of 75 results</p>
        <PaginationNumberWrapper>
          <p>
            <span>1</span>
          </p>
          <p>2</p>
          <p>3</p>
        </PaginationNumberWrapper>
        <p>... 10</p>
        <PaginationInput defaultValue={6} />
      </PaginationWrapper>
    </Container>
  );
};
