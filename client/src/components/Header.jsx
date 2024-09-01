import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";

// Tailwind CSS utility classes
const headerStyle = "h-[15dvh] p-12 pb-4 flex justify-between items-stretch";

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
