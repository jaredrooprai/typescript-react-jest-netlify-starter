import React, { lazy, LazyExoticComponent, ComponentType } from 'react';

type RouteType = {
  path: string;
  component?: LazyExoticComponent<ComponentType>;
  fallback?: JSX.Element;
  function?: () => void;
};

const Routes: RouteType[] = [
  {
    path: '/crm/customers/',
    component: lazy((): Promise<{ default: ComponentType<React.FC> }> => import('@pages/crm/CustomersPage')),
  },
  {
    path: '/crm/staff/',
    component: lazy((): Promise<{ default: ComponentType<React.FC> }> => import('@pages/crm/StaffPage')),
  },
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
