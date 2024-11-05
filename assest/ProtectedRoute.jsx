
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check for the token

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
