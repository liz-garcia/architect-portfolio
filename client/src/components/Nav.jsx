import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const navStyle = "p-1";
const ulStyle = "h-full flex space-x-4 sm:space-x-1 xs:sm:space-x-4";
const liStyle = "h-full w-20 xs:w-fit";
const linkStyle =
  "uppercase font-light size-full flex items-center justify-center text-center hover:underline underline-offset-8 text-sm xs:text-base xs:p-1";

const Nav = () => {
  return (
    <nav className={navStyle}>
      <ul className={ulStyle}>
        <li className={liStyle}>
          <Link to="/about" className={linkStyle}>
            About
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/portfolio" className={linkStyle}>
            Portfolio
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/resume" className={linkStyle}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
