import React from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data, isError, isLoading } = useQuery(
    'employments',
    (): Promise<AxiosResponse> => axios.get('api/user/venues/employments/'),
    { retry: false }
  );

  if (isError) {
    window.location.replace(`${process.env.API_URL}accounts/login/`);
  } else if (isLoading) {
    return <h1> Authenticating... </h1>;
  } else if (data && data.status === 200 && data.data.length) {
    return <>{children}</>;
  } else if (data && data.status === 200 && !data.data.length) {
    window.location.replace(process.env.API_URL);
  }
  return null;
};

export default ProtectedRoute;
