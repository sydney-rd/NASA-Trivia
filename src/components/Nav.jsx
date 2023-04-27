import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <p>
      <Link to="/create">Create</Link>
      </p>
      <p>
      <Link to="/trivia">Trivia</Link>
      </p>
      <p>
      <Link to="/">Homepage</Link>
      </p>
    </nav>
  );
}

export default Navbar;
