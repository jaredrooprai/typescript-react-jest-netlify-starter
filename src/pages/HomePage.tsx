import React from 'react';
import NavBar from '@components/NavBar';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

const HomePage: React.FC = () => {
  const { data } = useQuery('user', (): Promise<AxiosResponse> => axios.get('api/auth/profile'));
  return (
    <>
      <NavBar />
      <h2>Home Page</h2>
      {JSON.stringify(data)}
    </>
  );
};
export default HomePage;
