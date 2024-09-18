import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const navStyle = "p-1";
const ulStyle = "h-full flex space-x-8 sm:space-x-1";
const liStyle = "h-full w-20";
const linkStyle =
  "size-full flex items-center justify-center text-center hover:underline underline-offset-8 text-sm sm:text-xs";

const Nav = () => {
  return (
    <nav className={navStyle}>
      <ul className={ulStyle}>
        <li className={liStyle}>
          <a href="#about" className={linkStyle}>
            ABOUT
          </a>
        </li>
        <li className={liStyle}>
          <Link to="/portfolio" className={linkStyle}>
            PORTFOLIO
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/resume" className={linkStyle}>
            RESUME
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
