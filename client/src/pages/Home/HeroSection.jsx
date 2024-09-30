import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";
import SecondaryLink from "../../components/Buttons/SecondaryLink.jsx";
import AutoEaseCarrousel from "../../components/Galleries/AutoEaseCarrousel.jsx";
import heroImage1 from "/architectural-plan-1.png";
import heroImage2 from "/architectural-plan-2.png";
import heroImage3 from "/architectural-plan-3.png";

// Tailwind CSS utility classes
const heroSectionStyle =
  "w-[100dvw] h-[88dvh] flex pl-16 md:p-0 2xl:pl-16 3xl:pl-28 items-center justify-center md:flex-col-reverse gap-8 md:gap-3 2xl:gap-12 3xl:gap-24 xs:gap-0 xs:h-[84dvh]";
const heroTitleStyle =
  "w-1/3 text-center flex flex-col md:w-full md:h-1/3 sm:h-2/5 items-center justify-center md:pb-8 sm:pb-6 xs:pb-4 xs:h-[40%] xs:pl-1";
const h1Style =
  "font-serif italic font-bold mb-4 sm:text-[3.25rem]/[2.5rem] lg:text-6xl/[3.5rem] xl:text-7xl/[4rem] 2xl:text-[5.5rem]/[4.5rem] 3xl:text-9xl/[6.5rem] md:mb-2 sm:pb-0 sm:pt-2 xs:text-[2.75rem]/[2.15rem] 2xs:text-4xl/[2rem]";
const h2Style =
  "font-serif font-normal pb-2 md:px-4 2xl:px-2 mb-4 md:mb-2 2xl:text-2xl/7 lg:text-[1.25rem]/6 lg:px-0 lg:mx-0 md:text-2xl sm:text-[1.45rem]/[1.75rem] sm:py-2 sm:px-8 xs:text-[1.45rem]/[1.75rem] 2xs:text-xl/[1.35rem] 3xl:text-4xl mx-8 xl:mx-2 3xl:mx-2 3xl:px-0 3xl:py-2 3xl:pb-4";
const heroImagesContainerStyle =
  "w-2/3 h-full md:h-2/3 sm:h-3/5 md:w-full xs:h-[60%]";
const heroButtonsStyle = "flex gap-2";

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
            <PrimaryLink to="/about">About me</PrimaryLink>
            <SecondaryLink href="/#contact">Contact</SecondaryLink>
          </div>
        </div>
        <div id="heroImagesContainer" className={heroImagesContainerStyle}>
          <AutoEaseCarrousel
            images={images}
            displayTime={4000}
            altText="Gallery Image"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
