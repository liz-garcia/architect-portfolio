import PropTypes from "prop-types";
import contactImg from "/architectural-plan-4.png";
import contactBg from "/architectural-plan-5.png";
import Image from "../../components/Image.jsx";
import SecondaryLink from "../../components/Buttons/SecondaryLink.jsx";

// Tailwind utility classes
const contactStyle =
  "relative h-screen min-h-fit p-24 xl:p-20 lg:p-16 mt-4 flex items-center bg-gradient-to-br from-zinc-900 to-zinc-950 place-content-center portrait:h-fit 3xl:h-screen h-1260-w-1024:h-[50vh] h-1260-w-1024:max-h-fit ipad-surface-pro:portrait:h-fit xs:portrait:py-8 xs:portrait:px-6 md:landscape:h-fit";
const contactImageBgStyle =
  "absolute size-full mix-blend-overlay opacity-100 bg-white";
const containerStyle =
  "box-content mx-auto my-auto flex flex-col place-content-stretch gap-8 md:landscape:gap-4 3xl:gap-8 portrait:h-5/6 portrait:w-7/8 xs:portrait:w-full landscape:h-4/6 landscape:w-6/8 landscape:flex-row md:landscape:flex-col min-h-fit portrait:place-content-center ipad-surface-pro:portrait:h-[80vh] ipad-surface-pro:portrait:h-fit";
const contactImageStyle =
  "min-h-[40vh] basis-1/3 rounded-2xl bg-white drop-shadow overflow-hidden ipad-surface-pro:portrait:min-h-[20vh] portrait:basis-0 md:landscape:basis-0";
const textContainerStyle =
  "min-h-fit basis-2/3 rounded-2xl bg-white drop-shadow p-8 pr-12 flex flex-col gap-4 portrait:pr-8 max-h-fit xs:portrait:p-4";
const textBoxStyle = "flex flex-col gap-2 pb-4";
const titleStyle = "font-serif font-bold text-3xl pb-2 border-b sm:text-2xl";
const textStyle = "sm:text-base md:py-2";
const buttonContainerStyle =
  "2xs:portrait:scale-90 2xs:portrait:flex 2xs:portrait:place-content-center";

const ContactSection = ({ data }) => {
  const emailSubsection = data ? data.emailSubsection : null;
  const socialSubsection = data ? data.socialSubsection : null;

  return (
    <>
      <section id="contact" className={contactStyle}>
        <div id="contactImageBg" className={contactImageBgStyle}>
          <Image
            src={contactBg}
            objectFit="cover"
            objectExtra="object-right-top"
          />
        </div>
        <div className={containerStyle}>
          <div id="contactImage" className={contactImageStyle}>
            <Image src={contactImg} objectFit="cover" />
          </div>
          <div className={textContainerStyle}>
            <div className={textBoxStyle}>
              <h3 className={titleStyle}>{emailSubsection.title}</h3>
              <p className={textStyle}>{emailSubsection.text}</p>
              <div className={buttonContainerStyle}>
                <SecondaryLink href={`mailto:${emailSubsection.email}`}>
                  {emailSubsection.email}
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
                <SecondaryLink
                  href={`https://www.linkedin.com/in/${socialSubsection.linkedIn}`}
                >
                  linkedin.com/in/{socialSubsection.linkedIn}
                </SecondaryLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Prop-types validation
ContactSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactSection;
