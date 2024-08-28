import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const logoStyle =
  "font-serif font-black text-2xl flex items-center justify-center p-8 pb-9";

// Header Component
const Logo = () => {
  return (
    <h1 className={logoStyle}>
      <Link to="/">Rhina Aragón</Link>
    </h1>
  );
};

export default Logo;
