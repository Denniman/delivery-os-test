import { useEffect, useState, Fragment } from 'react';

import AppData from '../../../../mock';
import { DataList } from '../../../../components/DataList';
import { Skeleton } from '../../../../components/Skeleton';

export const All = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const allTimer = setTimeout(() => {
      setIsloading(false);
      setData(AppData);
    }, 2000);

    return () => {
      clearTimeout(allTimer);
    };
  }, [data]);
  return (
    <Fragment>
      {isLoading && <Skeleton length={AppData.length} />}
      {data.map((item) => (
        <DataList {...item} key={item.id} />
      ))}
    </Fragment>
  );
};
