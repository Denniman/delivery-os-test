import React, { useEffect, useState } from 'react';

import { DataList } from '../../../../components/DataList';
import AppData from '../../../../data';

import { Container } from './All.style';

export const All = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(AppData);
    }, 2000);
  }, [data]);
  return (
    <Container>
      {data.map((item) => (
        <DataList {...item} key={item.id} />
      ))}
    </Container>
  );
};
