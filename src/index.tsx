import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((route, i) => (
          <Route key={i} path={route.path}>
            {route.component ? (
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
