const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="mt-4 flex h-screen items-center border-b-8 border-lime-200 bg-zinc-900 h-1260-w-1024:h-[40vh]"
      >
        <div className="mx-auto my-auto flex flex-col place-content-stretch gap-8 lg:gap-6 portrait:h-5/6 portrait:w-4/6 landscape:h-4/6 landscape:w-4/5 landscape:flex-row">
          <div className="basis-1/2 rounded-2xl bg-white landscape:basis-2/5"></div>
          <div className="basis-full rounded-2xl bg-white"></div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
