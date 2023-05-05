import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { CommonProvider } from './contexts/CommonContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <CommonProvider>
      <AuthProvider>
        <div className="App">
          <HomePage />
          <LoginPage />
        </div>
      </AuthProvider>
    </CommonProvider>
  );
}

export default App;
