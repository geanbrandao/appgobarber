import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import Splashscreen from '../pages/Splashscreen';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Splashscreen />;
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
/*
Por causa desse arquivo nao precisa de redirect na tela de login, pois quando
tiver o usuario no context apos o login, vai mudar o sistema de rotas, e a rota
inicial do appRoutes eh a dahsboard nesse caso
*/
