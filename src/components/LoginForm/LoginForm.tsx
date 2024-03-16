import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

interface Props {
  onClickLogin: () => void;
}

const LoginForm = ({ onClickLogin, ...props }: Props) => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClickLogin();
  };

  return (
    <div className="login-form-container">
      <form action="" onSubmit={handleLogin}>
        <h1> Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-me">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
