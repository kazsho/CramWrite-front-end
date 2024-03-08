import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './layouts/Navbar';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Array of routes where Navbar should be displayed
  const allowedRoutes = ['/login', '/register'];

  // Check if the current route is in the allowedRoutes array
  const shouldDisplayNavbar = !allowedRoutes.includes(location.pathname);

  if (shouldDisplayNavbar) {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }

  // If the current route is in the allowedRoutes array, only render the Outlet
  return <Outlet />;
}

export default App;
