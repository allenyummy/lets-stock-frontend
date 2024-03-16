import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="container">
      <form action="">
        <h1> Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <div className="remember-checkbox">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div>

        <button type="submit">Login</button>

        <div className="register">
          <p>
            <a href="#">Forgot Password?</a>
          </p>
        </div>

        <div className="forgot-password">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
