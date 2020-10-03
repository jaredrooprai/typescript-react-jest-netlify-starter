import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/crm/customers">crm-customers</Link>
        </li>
        <li>
          <Link to="/crm/staff/">crm-staff</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
