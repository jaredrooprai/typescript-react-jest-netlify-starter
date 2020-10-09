import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { VenueProvider, VenueContext } from '@contexts/VenueContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '@components/NavBar';
import Routes from './routes';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <VenueContext.Consumer>
      {({ isEmployed, isLoading }) => (
        <>
          <BrowserRouter>
            <NavBar />
            {!isLoading ? (
              <Switch>
                {Routes.map((route, index) => (
                  <Route key={index} path={route.path}>
                    {!isEmployed ? (
                      (): void => window.location.replace(`${process.env.API_URL}accounts/login/`)
                    ) : route.component ? (
                      <Suspense fallback={route.fallback || <h1>loading...</h1>}>
                        <route.component></route.component>
                      </Suspense>
                    ) : route.function ? (
                      route.function
                    ) : null}
                  </Route>
                ))}
              </Switch>
            ) : (
              <h1>loading...</h1>
            )}
          </BrowserRouter>
        </>
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
