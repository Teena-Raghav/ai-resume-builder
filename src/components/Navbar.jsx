import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">
          AI Resume Builder
        </h1>

       <ul className="flex gap-8">
  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/builder">Builder</Link>
  </li>

  <li>
    <Link to="/login">Login</Link>
  </li>
</ul>
      </div>
    </nav>
  );
}

export default Navbar;