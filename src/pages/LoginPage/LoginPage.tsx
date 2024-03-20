import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="login-page-container">
      <LoginForm onClickLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
