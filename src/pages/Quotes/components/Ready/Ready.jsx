import { useEffect, useState, Fragment } from 'react';

import AppData from '../../../../mock';
import { DataList } from '../../../../components/DataList';
import { Skeleton } from '../../../../components/Skeleton';

export const Ready = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
      setData(AppData);
    }, 2000);
  }, [data]);

  return (
    <Fragment>
      {isLoading && <Skeleton length={1} />}
      {data.slice(1, 2).map((item) => (
        <DataList {...item} key={item.id} />
      ))}
    </Fragment>
  );
};
