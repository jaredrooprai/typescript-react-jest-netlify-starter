import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import NavBar from '@components/NavBar';

type venueType = {
  id: number;
  venue: {
    name: string;
  };
};

const HomePage: React.FC = () => {
  const [queryData, setQueryData] = useState<boolean>(false);

  const { data, isLoading } = useQuery(
    'credit-cards',
    (): Promise<AxiosResponse> => axios.get('api/user/financials/user-payment-methods/'),
    {
      enabled: queryData,
    }
  );

  const { data: employments_data } = useQuery(
    'employments',
    (): Promise<AxiosResponse> => axios.get('api/user/venues/employments/')
  );

  const loadOnClick = () => {
    setQueryData(true);
  };

  return (
    <>
      <NavBar />
      <h2>User Credit Cards</h2>
      {employments_data.data.map((employment: venueType) => {
        return <div key={employment.id}>{employment.venue.name}</div>;
      })}
      <div style={{ height: 40 }}></div>
      {!data && <button onClick={loadOnClick}>{isLoading ? 'loading..' : 'Load Credit Cards'}</button>}
      {!isLoading && JSON.stringify(data)}
    </>
  );
};

export default HomePage;
