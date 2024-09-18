import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const logoStyle = "p-1 flex items-center justify-center";
const linkStyle =
  "p-3 py-5 size-full text-center flex items-center justify-center font-serif font-black text-2xl md:text-[1.65rem] sm:text-[1.55rem] md:pl-2 sm:p-2 leading-5 mb-2";

// Logo Component
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
