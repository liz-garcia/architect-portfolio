import styled from "styled-components";
import PrimaryLink from "./Buttons/PrimaryLink.jsx";

// Tailwind CSS utility classes
const heroSectionStyle = "h-85dvh";
const heroTitleStyle = "pl-12 pb-12";
const h1Style = "w-fit font-serif font-bold text-5xl";
const h2Style = "w-fit text-lg/5 py-2";
const heroImagesStyle = "";
const heroImage1Style = "";
const heroImage2Style = "";

// Styled Components for using grid-template-areas
const GridContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    "image1 image2"
    "title image2";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto;
  gap: 1rem;
`;
const HeroImage1 = styled.div`
  grid-area: image1;
`;
const HeroImage2 = styled.div`
  grid-area: image2;
`;
const HeroTitle = styled.div`
  grid-area: title;
`;

// HeroSection component
function HeroSection() {
  return (
    <>
      <section id="heroSection" className={heroSectionStyle}>
        <GridContainer>
          {/* First image area */}
          <HeroImage1 className={heroImage1Style}>
            <img className={heroImagesStyle} src="" alt="" />
          </HeroImage1>

          {/* Title text area */}
          <HeroTitle className={heroTitleStyle}>
            <h1 className={h1Style}>Architect Portfolio</h1>
            <h2 className={h2Style}>
              Rhina Aragón, senior architect based in Minnesota.
            </h2>
            <PrimaryLink to="/#contact">Contact me</PrimaryLink>
          </HeroTitle>

          {/* Second image area */}
          <HeroImage2 className={heroImage2Style}>
            <img className={heroImagesStyle} src="" alt="" />
          </HeroImage2>
        </GridContainer>
      </section>
    </>
  );
}

export default HeroSection;
