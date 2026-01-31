function Advice() {
  return (
    <>
      <section className="w-full mt-15 -z-10 flex flex-col gap-15 max-lg:gap-10 justify-center items-center px-4">
        <div className="flex w-full justify-evenly text-center items-center max-lg:flex-wrap max-lg:gap-10 max-lg:justify-center max-lg:items-center">
          <div className="flex flex-col gap-2 max-w-md">
            <i className="fa-solid fa-briefcase text-black text-5xl max-sm:text-4xl"></i>
            <h2 className="text-3xl max-md:text-2xl max-sm:text-xl">
              Job Guarantee and 100% Placement Record
            </h2>
            <p className="opacity-85 font-semibold text-xl max-md:text-lg max-sm:text-base">
              Academia ensures job guarantee with a{" "}
              <br className="max-sm:hidden" />
              100% placement record so far.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <i className="fa-solid fa-user-check text-black text-5xl max-sm:text-4xl"></i>
            <h2 className="text-3xl max-md:text-2xl max-sm:text-xl">
              Real-World Training with Industry Experts
            </h2>
            <p className="opacity-85 font-semibold text-xl max-md:text-lg max-sm:text-base">
              We offer dynamic skill-based training{" "}
              <br className="max-sm:hidden" />
              with the opportunity to work on real projects under the guidance
              of industry experts.
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-md">
            <i className="fa-solid fa-id-card-clip text-black text-5xl max-sm:text-4xl"></i>
            <h2 className="text-3xl max-md:text-2xl max-sm:text-xl">
              Polish Your Professional Persona
            </h2>
            <p className="opacity-85 font-semibold text-xl max-md:text-lg max-sm:text-base">
              Personality building soft skills training such as presentation,
              resume and CV <br className="max-sm:hidden" />
              building training, office etiquettes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Advice;
