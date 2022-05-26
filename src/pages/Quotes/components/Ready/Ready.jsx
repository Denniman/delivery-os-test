import { useEffect, useState, Fragment } from 'react';

import AppData from '../../../../mock';
import { DataList } from '../../../../components/DataList';
import { Skeleton } from '../../../../components/Skeleton';

export const Ready = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const pendingTimer = setTimeout(() => {
      setIsloading(false);
      setData(readyData);
    }, 2000);

    return () => {
      clearTimeout(pendingTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const readyData = AppData.filter(({ status }) => status === 'Ready');

  return (
    <Fragment>
      {isLoading && <Skeleton length={readyData.length} />}
      {data.map((item) => (
        <DataList {...item} key={item.id} />
      ))}
    </Fragment>
  );
};
