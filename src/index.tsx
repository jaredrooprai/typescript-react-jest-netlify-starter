import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (window.location.pathname === '/logout') return;
    axios
      .get('/api/user/venues/employments/')
      .then((resp: AxiosResponse) => {
        if (resp && resp.data.length > 0) {
          setAuth(true);
          setIsLoading(false);
        } else window.location.replace(process.env.API_URL);
      })
      .catch(() => {
        setAuth(false);
        setIsLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((route, index) => (
          <Route key={index} path={route.path}>
            {!auth && !isLoading ? (
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
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
