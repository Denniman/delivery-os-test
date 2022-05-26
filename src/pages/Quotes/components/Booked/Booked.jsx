import { useEffect, useState, Fragment } from 'react';

import AppData from '../../../../mock';
import { DataList } from '../../../../components/DataList';
import { Skeleton } from '../../../../components/Skeleton';

export const Booked = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const bookedTimer = setTimeout(() => {
      setIsloading(false);
      setData(bookedData);
    }, 2000);

    return () => {
      clearTimeout(bookedTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bookedData = AppData.filter(({ status }) => status === 'Booked');

  return (
    <Fragment>
      {isLoading && <Skeleton length={bookedData.length} />}
      {data.map((item) => (
        <DataList {...item} key={item.id} />
      ))}
    </Fragment>
  );
};
