function Explore() {
  return (
    <>
      <section className="w-full bg-[#EFF4F8] flex justify-evenly items-center gap-10 mt-10 max-sm:flex-col max-sm:justify-center max-sm:text-center max-lg:flex-col max-lg:justify-center max-lg:text-center">
        <div className="flex flex-col gap-10 max-sm:mt-5 max-lg:mt-5" >
          <h1 className="text-green-600 font-semibold text-6xl max-sm:text-4xl">
            {" "}
            <b className="text-black font-semibold"> Explore our</b> <br />{" "}
            Current Course <br /> Offerings
          </h1>

          <p className="text-2xl opacity-85 max-sm:text-xl">
            Our courses are carefully designed to enrich and <br /> transform
            your educational experience.
          </p>

          <div>
            <button className="px-6 py-2.5 rounded-xl hover:cursor-pointer bg-white text-black font-semibold border transition-all duration-300 ease-out hover:border-green-500 hover:text-green-600 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 active:translate-y-0 max-lg:px-2 max-lg:py-1.5 max-sm:text-sm border-green-600 max-sm:w-50">
              Browse Course
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-10 max-sm:p-5 max-lg:p-2 max-lg:pb-5">
          <div>
            <img src="./design.png" className="w-165" />
          </div>

          <div className="flex gap-5">
            <div>
              <img src="./front.png" className="w-80" />
            </div>

            <div>
              <img src="./same3.png" className="w-80" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
