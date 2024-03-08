import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = () => {
  const user = localStorage.getItem('token');
  return user ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;