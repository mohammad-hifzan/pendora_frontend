import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  const currentCompany = useSelector(state => state.company.currentCompany);
  if (loading) return <div>Loading...</div>;

  const authenticated = isAuthenticated && user
  const redirect = window.location.pathname.includes("admin") ? "/admin/error" : "/login"
  if (user?.role !== 'admin' && window.location.pathname !== "/admin/new") {
    return <Navigate to="/admin/new" />;
  }

  if (user?.role === 'admin' && !currentCompany && !window.location.pathname.includes('/admin/companies')) {
    return <Navigate to="/admin/companies" />;
  }

  return children;
  };

export default PrivateRoute;
