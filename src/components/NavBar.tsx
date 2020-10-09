import React from 'react';
import { Link } from 'react-router-dom';

const CustomersPage = () => import('@pages/crm/CustomersPage');

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link onMouseEnter={CustomersPage} to="/crm/customers">
            crm-customers
          </Link>
        </li>
        <li>
          <Link to="/logout/">logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
