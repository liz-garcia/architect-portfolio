import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";

// Tailwind CSS utility classes
const headerStyle =
  "h-[12dvh] p-12 pb-8 sm:p-10 sm:pb-9 3xl:pb-10 border-b-8 border-black flex justify-between items-stretch";

// Header Component
const Header = () => {
  return (
    <header className={headerStyle}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
