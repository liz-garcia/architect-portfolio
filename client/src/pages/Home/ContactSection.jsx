const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="mt-4 flex h-screen items-center border-b-8 border-lime-200 bg-zinc-900"
      >
        <div className="mx-auto my-auto flex flex-col place-content-stretch gap-8 portrait:h-5/6 portrait:w-4/6 landscape:h-4/6 landscape:w-3/4 landscape:flex-row">
          <div className="basis-1/3 rounded-2xl bg-white"></div>
          <div className="basis-2/3 rounded-2xl bg-white"></div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
