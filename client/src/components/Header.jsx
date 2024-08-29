import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";

// Tailwind CSS utility classes
const headerStyle = "h-16dvh p-8 flex justify-between items-stretch";

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
