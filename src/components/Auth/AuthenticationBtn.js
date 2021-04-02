import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import LogoutBtn from './LogoutBtn';
import LoginBtn from './LoginBtn';

const AuthenticationBtn = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutBtn /> : <LoginBtn />;
};

export default AuthenticationBtn;
