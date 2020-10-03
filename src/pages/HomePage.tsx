import React, { useState } from 'react';
import NavBar from '@components/NavBar';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

const HomePage: React.FC = () => {
  const [queryData, setQueryData] = useState<boolean>(false);
  const { data } = useQuery('user', (): Promise<AxiosResponse> => axios.get('api/auth/profile/'), {
    enabled: queryData,
  });

  const loadOnClick = () => {
    setQueryData(true);
  };

  return (
    <>
      <NavBar />
      <h2>Home Page</h2>
      <button onClick={loadOnClick}>Load User</button>
      {JSON.stringify(data)}
    </>
  );
};

export default HomePage;
