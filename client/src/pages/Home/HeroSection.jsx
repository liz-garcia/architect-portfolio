import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";
import SecondaryLink from "../../components/Buttons/SecondaryLink.jsx";
import AutoEaseCarrousel from "../../components/Galleries/AutoEaseCarrousel.jsx";
import heroImage1 from "/architectural-plan-1.png";
import heroImage2 from "/architectural-plan-2.png";
import heroImage3 from "/architectural-plan-3.png";

// Tailwind CSS utility classes
const heroSectionStyle =
  "w-[100dvw] h-[88dvh] flex pl-16 md:p-0 md:pb-1 2xl:pl-16 3xl:pl-28 items-center justify-center md:flex-col-reverse gap-8 md:gap-3 2xl:gap-12 3xl:gap-24 xs:gap-0 xs:h-[84svh] xs-landscape:flex-row xs-landscape:h-[84svh] h-1366-w-1024:flex-col-reverse h-1366-w-1024:gap-3 h-1366-w-1024:p-0 h-1366-w-1024:pb-2 lg-landscape:pl-0 lg-landscape:gap-0";
const heroTitleStyle =
  "w-1/3 text-center flex flex-col md:w-full md:h-1/3 sm:h-2/5 items-center justify-center md:pb-8 sm:pb-6 xs:pb-4 xs:h-[40%] xs:pl-1 xs-landscape:scale-95 h-658-w-320-landscape:min-h-fit h-568-w-320-landscape:min-h-fit h-1366-w-1024:w-full h-1366-w-1024:h-1/3 h-1366-w-1024:pb-8 xs-landscape:px-4 xs-landscape:ml-2 xs-landscape:min-h-fit h-414-w-896-landscape:m-0 h-414-w-896-landscape:p-0 lg-landscape:mx-4 h-658-w-320-landscape:pt-2";
const h1Style =
  "font-serif italic font-bold mb-4 sm:text-[3.25rem]/[2.5rem] lg:text-6xl/[3.5rem] xl:text-7xl/[4rem] 2xl:text-[5.5rem]/[4.5rem] 3xl:text-9xl/[6.5rem] md:mb-2 sm:mb-0 sm:pb-0 sm:pt-2 xs:text-[2.75rem]/[2.15rem] 2xs:text-[2.15rem]/[2rem] h-667-w-375:text-[2.35rem]/[2rem] h-658-w-320:text-[2.25rem]/[1.75rem] h-568-w-320:text-[1.95rem] h-658-w-320-landscape:text-4xl h-568-w-320-landscape:text-5xl h-568-w-320-landscape:scale-90 h-667-w-375-landscape:text-4xl h-568-w-320-landscape:pt-0 h-1366-w-1024:text-7xl/tight h-1366-w-1024:mb-2 lg-portrait:pb-0 lg-portrait:mb-1 xs-landscape:text-[2.5rem]/[2.24rem] xs-landscape:scale-[1.02] h-414-w-896-landscape:text-5xl h-414-w-896-landscape:mb-1";
const h2Style =
  "font-serif font-normal pb-2 md:px-4 2xl:px-2 mb-4 md:mb-2 2xl:text-2xl/7 lg:text-[1.25rem]/6 lg:px-0 lg:mx-0 md:text-[1.35rem]/[1.75rem] sm:text-[1.45rem]/[1.75rem] sm:py-2 sm:px-8 xs:text-[1.45rem]/[1.75rem] 2xs:text-xl/[1.55rem] 3xl:text-4xl mx-8 xl:mx-2 3xl:mx-2 3xl:px-0 3xl:py-2 3xl:pb-4 xs:pt-3 h-658-w-320:text-base/snug h-667-w-375:text-xl/tight h-568-w-320:pt-1 h-568-w-320-landscape:text-base/snug xs-landscape:px-2 h-568-w-320-landscape:pb-0 h-1366-w-1024:text-3xl/tight h-1366-w-1024:px-24 h-568-w-320:pb-0 h-658-w-320:pb-0 xs-landscape:text-xl/tight h-658-w-320-landscape:mb-0";
const heroImagesContainerStyle =
  "w-2/3 h-full md:h-2/3 sm:h-3/5 md:w-full xs:h-[60%] xs-landscape:h-[100%] h-1366-w-1024:w-full h-1366-w-1024:h-2/3";
const heroButtonsStyle =
  "flex gap-2 3xl:gap-4 h-568-w-320-landscape:scale-90 h-667-w-375-landscape:scale-90 h-1366-w-1024:scale-105 h-568-w-320:scale-[0.85] h-658-w-320:scale-[0.85] h-667-w-375:scale-[0.85] lg-portrait:scale-[1.10]] lg-landscape:place-content-center h-844-w-390-landscape:scale-90";

// HeroSection component
function HeroSection() {
  const images = [heroImage1, heroImage2, heroImage3];

  return (
    <>
      <section id="heroSection" className={heroSectionStyle}>
        <div id="heroTitle" className={heroTitleStyle}>
          <h1 className={h1Style}>Architect Portfolio</h1>
          <h2 className={h2Style}>
            Rhina Aragón, senior architect based in Minneapolis, Minnesota.
          </h2>
          <div id="heroButtons" className={heroButtonsStyle}>
            <PrimaryLink href="/#about">About me</PrimaryLink>
            <SecondaryLink href="/#contact">Contact</SecondaryLink>
          </div>
        </div>
        <div id="heroImagesContainer" className={heroImagesContainerStyle}>
          <AutoEaseCarrousel
            images={images}
            displayTime={5000}
            altText="Gallery Image"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
