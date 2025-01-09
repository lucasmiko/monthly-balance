import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useAuth();

  // Se o usuário estiver autenticado, renderiza o elemento; caso contrário, redireciona para /login
  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;