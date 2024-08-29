import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const logoStyle = "flex items-center justify-center";
const linkStyle =
  "p-3 py-5 size-full text-center flex items-center justify-center font-serif font-black text-2xl leading-5";

// Header Component
const Logo = () => {
  return (
    <h1 className={logoStyle}>
      <Link to="/" className={linkStyle}>
        Rhina Aragón
      </Link>
    </h1>
  );
};

export default Logo;
