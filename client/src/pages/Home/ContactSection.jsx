const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="flex h-screen items-center border-b-8 border-lime-200 bg-zinc-900 h-1260-w-1024:h-[40vh]"
      >
        <div className="mx-auto my-auto flex h-5/6 w-4/6 flex-col place-content-stretch gap-8 portrait:w-4/6">
          <div className="basis-1/2 rounded-2xl bg-white"></div>
          <div className="basis-full rounded-2xl bg-white"></div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
