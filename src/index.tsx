import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { VenueProvider, VenueContext } from '@contexts/VenueContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <VenueContext.Consumer>
      {({ isEmployed, isLoading }) => (
        <BrowserRouter>
          {!isLoading ? (
            <Switch>
              {Routes.map((route, index) => (
                <Route key={index} path={route.path}>
                  {!isEmployed ? (
                    (): void => window.location.replace(`${process.env.API_URL}accounts/login/`)
                  ) : route.component ? (
                    <Suspense fallback={route.fallback || <div>loading...</div>}>
                      <route.component></route.component>
                    </Suspense>
                  ) : route.function ? (
                    route.function
                  ) : null}
                </Route>
              ))}
            </Switch>
          ) : (
            <div>loading...</div>
          )}
        </BrowserRouter>
      )}
    </VenueContext.Consumer>
  );
};

ReactDOM.render(
  <VenueProvider>
    <App />
  </VenueProvider>,
  document.querySelector('#root')
);
