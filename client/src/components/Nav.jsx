import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const navStyle = "p-2";
const ulStyle = "h-full flex space-x-1 p-2";
const liStyle = "px-2 py-6";
const linkStyle = "px-4 py-4 hover:underline underline-offset-8";

const Nav = () => {
  return (
    <nav className={navStyle}>
      <ul className={ulStyle}>
        <li className={liStyle}>
          <Link to="/" className={linkStyle}>
            About
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/" className={linkStyle}>
            Portfolio
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/" className={linkStyle}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
