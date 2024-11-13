import SecondaryLink from "../../components/Buttons/SecondaryLink.jsx";

// Tailwind utility classes
const contactStyle =
  "h-screen min-h-fit p-24 xl:p-20 lg:p-16 mt-4 flex items-center border-b-8 border-lime-200 bg-zinc-900 place-content-center portrait:h-fit 3xl:h-[50vh] h-1260-w-1024:h-[50vh] h-1260-w-1024:max-h-fit xs:portrait:py-8 xs:portrait:px-6 md:landscape:h-fit";
const containerStyle =
  "box-content mx-auto my-auto flex flex-col place-content-stretch gap-8 md:landscape:gap-4 3xl:gap-8 portrait:h-5/6 portrait:w-7/8 xs:portrait:w-full landscape:h-4/6 landscape:w-6/8 landscape:flex-row md:landscape:flex-col min-h-fit portrait:place-content-center ipad-surface-pro:portrait:h-[80vh]";
const contactImageStyle = "min-h-[40vh] basis-1/3 rounded-2xl bg-white";
const textContainerStyle =
  "min-h-fit basis-2/3 rounded-2xl bg-white p-8 pr-12 flex flex-col gap-4 portrait:pr-8 max-h-fit xs:portrait:p-4";
const textBoxStyle = "flex flex-col gap-2 pb-4";
const titleStyle = "font-serif font-bold text-3xl pb-2 border-b sm:text-2xl";
const textStyle = "sm:text-base md:py-2";
const buttonContainerStyle =
  "2xs:portrait:scale-90 2xs:portrait:flex 2xs:portrait:place-content-center";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className={contactStyle}>
        <div className={containerStyle}>
          <div id="contactImage" className={contactImageStyle}></div>
          <div className={textContainerStyle}>
            <div className={textBoxStyle}>
              <h3 className={titleStyle}>Let&apos;s work together</h3>
              <p className={textStyle}>
                Have a vision for your space? From concept to detailed
                estimates, I provide comprehensive design and planning services
                to make your vision a reality. Let&apos;s collaborate to build
                something exceptional!
              </p>
              <div className={buttonContainerStyle}>
                <SecondaryLink href="mailto:arqaragonf@hotmail.com">
                  arqaragonf@hotmail.com
                </SecondaryLink>
              </div>
            </div>
            <div className={textBoxStyle}>
              <h3 className={titleStyle}>Find me online</h3>
              <p className={textStyle}>
                Connect with me on LinkedIn to see my latest projects,
                professional insights, and get in touch directly.
              </p>
              <div className={buttonContainerStyle}>
                <SecondaryLink href="https://www.linkedin.com/in/rhina-aragon/">
                  linkedin.com/in/rhina-aragon
                </SecondaryLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
