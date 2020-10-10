import React from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const { data, isError, isLoading } = useQuery(
    'employments',
    (): Promise<AxiosResponse> => axios.get('api/user/venues/employments/')
  );
  if (isError) {
    window.location.replace(`${process.env.API_URL}accounts/login/`);
  } else if (isLoading) {
    return <div> Authenticating... </div>;
  } else if (data && data.status === 200 && data.data.length) {
    return <>{children}</>;
  } else if (data && data.status === 200 && !data.data.length) {
    window.location.replace(process.env.API_URL);
  }
  return null;
};

export default Protected;
