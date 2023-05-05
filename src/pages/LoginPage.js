import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginPage;
