import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Loading/Loading';

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  console.log(isAdmin)

  if (isAdminLoading) {
    return <Loading></Loading>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login"></Navigate>

};

export default AdminRoute;