import SecondaryLink from "../../components/Buttons/SecondaryLink.jsx";

// Tailwind utility classes
const contactStyle =
  "mt-4 flex h-screen items-center border-b-8 border-lime-200 bg-zinc-900";
const containerStyle =
  "mx-auto my-auto flex flex-col place-content-stretch gap-8 portrait:h-5/6 portrait:w-4/6 landscape:h-4/6 landscape:w-3/4 landscape:flex-row";
const textContainerStyle = "basis-2/3 rounded-2xl bg-white p-12";
const textBoxStyle = "p-12";
const titleStyle = "";
const textStyle = "";
const buttonContainerStyle = "";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className={contactStyle}>
        <div className={containerStyle}>
          <div
            id="contactImage"
            className="basis-1/3 rounded-2xl bg-white"
          ></div>
          <div className={textContainerStyle}>
            <div className={textBoxStyle}>
              <h3 className={titleStyle}>Let&apos;s work together</h3>
              <p className={textStyle}></p>
              <div className={buttonContainerStyle}></div>
            </div>
            <div className={textBoxStyle}>
              <h3 className={titleStyle}>Find me online</h3>
              <p className={textStyle}></p>
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
