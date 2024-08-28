import { Link } from "react-router-dom";

// * Tailwind CSS utility classes
const navStyle = "w-fit";
const ulStyle = "flex space-x-4";
const linkStyle = "px-4 py-2 hover:underline underline-offset-8";
const liStyle = "";

const Nav = () => {
  return (
    <nav className={navStyle}>
      <ul className={ulStyle}>
        <Link to="/" className={linkStyle}>
          <li className={liStyle}>About</li>
        </Link>
        <Link to="/" className={linkStyle}>
          <li className={liStyle}>Portfolio</li>
        </Link>
        <Link to="/" className={linkStyle}>
          <li className={liStyle}>Resume</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
