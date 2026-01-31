function Educational() {
  return (
    <>
      <section className="w-full flex max-lg:flex-col mt-10 justify-evenly items-center max-lg:mt-10 max-lg:justify-center max-lg:text-center px-4">
        <img
          src="./learn.jpg"
          alt="image"
          className="w-135 max-xl:w-110 max-lg:w-96 max-md:w-80 max-sm:w-full rounded-4xl"
        />

        <div className="flex flex-col gap-15 max-lg:mt-5 max-w-3xl">
          <div className="flex flex-col gap-2">
            <span className="text-2xl max-md:text-2xl text-green-600">
              Our Educational Approach
            </span>
            <h2 className="text-7xl max-2xl:text-base max-xl:text-6xl max-lg:text-5xl max-md:text-5xl max-sm:text-4xl font-semibold ">
              Empowered Teaching, <br /> Limitless Potential
            </h2>
          </div>

          <p className="text-2xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base opacity-85 ">
            Our academy is a vibrant community that fosters growth and success{" "}
            <br className="max-sm:hidden" />
            for both tutors and students. We provide a supportive and enriching{" "}
            <br className="max-sm:hidden" />
            environment where tutors are empowered to inspire and guide{" "}
            <br className="max-sm:hidden" /> students towards achieving their
            academic goals. <br className="max-sm:hidden" /> Our academy
            promotes collaboration, critical thinking, and effective{" "}
            <br className="max-sm:hidden" /> communication, cultivating a
            culture of continuous <br className="max-sm:hidden" /> learning and
            intellectual curiosity.
          </p>
        </div>
      </section>
    </>
  );
}

export default Educational;
