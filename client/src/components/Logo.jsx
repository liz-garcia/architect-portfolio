import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const logoStyle =
  "p-1 flex items-center justify-center hover:scale-105 transform transition ease-in-out duration-500 h-568-w-320:scale-90 h-568-w-320:pb-0 h-658-w-320:scale-90 h-658-w-320:pb-0";
const linkStyle =
  "p-3 py-5 size-full text-center flex items-center justify-center font-serif font-black text-2xl md:text-[1.65rem] sm:text-[1.60rem] md:pl-2 sm:p-2 leading-5 mb-2 xs:mb-0 xs:text-4xl xs:p-0 3xl:text-4xl";

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
