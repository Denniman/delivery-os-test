import React, { useEffect, useState } from 'react';

import { DataList } from '../../../../components/DataList';
import AppData from '../../../../data';

import { Container } from './Booked.style';

export const Booked = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(AppData);
    }, 2000);
  }, [data]);

  return (
    <Container>
      {data.slice(2).map((item) => (
        <DataList {...item} key={item.id} />
      ))}
    </Container>
  );
};
