import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import axios from 'axios';
import Protected from '@components/Protected';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((route) => (
          <Route key={route.path} path={route.path}>
            {route.component ? (
              <Protected>
                <Suspense fallback={route.fallback || <h1>Loading Page...</h1>}>
                  <route.component></route.component>
                </Suspense>
              </Protected>
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
