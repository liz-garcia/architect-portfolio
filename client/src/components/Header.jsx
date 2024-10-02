import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";

// Tailwind CSS utility classes
const headerStyle =
  "h-[12dvh] p-12 pb-8 sm:pb-10 sm:gap-8 3xl:p-16 3xl:pb-10 border-b border-zinc-800 flex justify-between items-stretch w-full xs:h-[16svh] xs:flex-col xs:px-2 xs:py-4 xs:pt-6 xs:gap-0 xs:items-center xs:place-content-center";

// Header Component
const Header = () => {
  return (
    <header className={headerStyle}>
      <Logo />
      <nav></nav>
      <Nav />
    </header>
  );
};

export default Header;
