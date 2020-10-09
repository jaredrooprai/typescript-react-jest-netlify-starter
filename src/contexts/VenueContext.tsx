import React, { useState, ReactNode, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

type venueType = {
  id: number;
  venue: Record<string, unknown>;
};

type VenueContextType = {
  isEmployed: boolean;
  isLoading: boolean;
  venues: venueType[];
};

export const VenueContext = React.createContext<VenueContextType>({
  isEmployed: false,
  isLoading: true,
  venues: [],
});

interface Props {
  children: ReactNode;
}

export const VenueProvider: React.FC<Props> = ({ children }) => {
  const [isEmployed, setIsEmployed] = useState<boolean>(false);
  const [venues, setVenues] = useState<venueType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (window.location.pathname === '/logout') return;
    axios
      .get('/api/user/venues/employments/')
      .then((resp: AxiosResponse) => {
        if (resp && resp.data.length) {
          setIsEmployed(true);
          setVenues(resp.data);
          setIsLoading(false);
        } else window.location.replace(process.env.API_URL);
      })
      .catch(() => {
        setIsEmployed(false);
        setIsLoading(false);
      });
  }, []);

  return (
    <VenueContext.Provider
      value={{
        isEmployed: isEmployed,
        isLoading: isLoading,
        venues: venues,
      }}
    >
      {children}
    </VenueContext.Provider>
  );
};
