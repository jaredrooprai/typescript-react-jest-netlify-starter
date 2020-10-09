import React, { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { VenueContext } from '@contexts/VenueContext';

const HomePage: React.FC = () => {
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

  const venueContext = useContext(VenueContext);

  return (
    <>
      <h2>User Credit Cards</h2>
      {!data && <button onClick={loadOnClick}>{isLoading ? 'loading..' : 'Load Credit Cards'}</button>}
      {!isLoading && JSON.stringify(data)}
      <div style={{ height: 40 }}></div>
      {venueContext.isEmployed &&
        venueContext.venues.map((venue, index) => {
          return <div key={index}>{venue.venue.name}</div>;
        })}
    </>
  );
};

export default HomePage;
