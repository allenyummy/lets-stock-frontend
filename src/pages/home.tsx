import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <li>
        <Link to={`/login`}>Logout</Link>
      </li>
    </div>
  );
}
