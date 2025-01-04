import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const footerStyle =
  "h-[12dvh] w-full text-xs text-zinc-400 bg-zinc-950 p-12 px-16 pb-16 flex justify-between items-stretch md:flex-col-reverse md:px-8 md:py-14 md:gap-4 md:items-center md:place-content-center xs:h-[16dvh] xs:py-16 3xl:text-lg 3xl:px-20 3xl:pb-20";
const copyrightStyle = "";
const linksListStyle = "";
const ulStyle =
  "flex space-x-8 xs:space-x-0 xs:grid xs:grid-cols-2 xs:grid-rows-2 xs:gap-2";
const liStyle = "w-fit xs:w-full";
const linkStyle =
  "uppercase font-light tracking-wide text-xs text-center hover:text-white size-full flex items-center justify-center 3xl:text-lg";

// Footer Component
const Footer = () => {
  return (
    <footer className={footerStyle}>
      <div className={copyrightStyle}>
        <p>&copy; Copyright Rhina Aragón, 2024.</p>
      </div>
      <div className={linksListStyle}>
        <ul className={ulStyle}>
          <li className={liStyle}>
            <Link to="/#" className={linkStyle}>
              Portfolio PDF
            </Link>
          </li>
          <li className={liStyle}>
            <Link to="/#" className={linkStyle}>
              Resume PDF
            </Link>
          </li>
          <li className={liStyle}>
            <Link to="/#" className={linkStyle}>
              Contact
            </Link>
          </li>
          <li className={liStyle}>
            <Link to="/admin" className={linkStyle}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
