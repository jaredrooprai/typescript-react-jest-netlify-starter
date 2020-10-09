import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

const CustomersPage: React.FC = () => {
  const [queryData, setQueryData] = useState<boolean>(false);
  const { data, isLoading } = useQuery(
    'credit-cards',
    (): Promise<AxiosResponse> => axios.get('/api/user/financials/user-payment-methods/'),
    {
      enabled: queryData,
    }
  );

  const loadOnClick = () => {
    setQueryData(true);
  };

  return (
    <>
      <h2>Customers page</h2>
      {!data && <button onClick={loadOnClick}>{isLoading ? 'loading..' : 'Load Credit Cards'}</button>}
      {!isLoading && JSON.stringify(data)}
    </>
  );
};

export default CustomersPage;
