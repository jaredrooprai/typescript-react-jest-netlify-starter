import React, { lazy, LazyExoticComponent, ComponentType } from 'react';

type RouteType = {
  path: string;
  component?: LazyExoticComponent<ComponentType>;
  fallback?: JSX.Element;
  function?: () => void;
};

const Routes: RouteType[] = [
  {
    path: '/login/',
    function: (): void => window.location.replace(`${process.env.API_URL}accounts/login/`),
  },
  {
    path: '/logout/',
    function: (): void => window.location.replace(`${process.env.API_URL}accounts/logout/`),
  },
  {
    path: '/',
    component: lazy((): Promise<{ default: ComponentType<React.FC> }> => import('@pages/HomePage')),
  },
];

export default Routes;
