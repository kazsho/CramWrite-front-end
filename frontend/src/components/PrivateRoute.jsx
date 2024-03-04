import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { userInfo } = useContext(UserContext);
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;