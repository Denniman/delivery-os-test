import { useEffect, useState, Fragment } from 'react';

import AppData from '../../../../mock';
import { DataList } from '../../../../components/DataList';
import { Skeleton } from '../../../../components/Skeleton';

export const Pending = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const pendingTimer = setTimeout(() => {
      setIsloading(false);
      setData(pendingData);
    }, 2000);

    return () => {
      clearTimeout(pendingTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pendingData = AppData.filter(({ status }) => status === 'Pending');

  return (
    <Fragment>
      {isLoading && <Skeleton length={pendingData.length} />}
      {data.map((item) => (
        <DataList {...item} key={item.id} />
      ))}
    </Fragment>
  );
};
