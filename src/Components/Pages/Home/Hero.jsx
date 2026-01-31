function Hero() {
  return (
    <>
      <section className="w-full h-screen bg-no-repeat bg-cover object-cover flex justify-center items-center max-sm:text-center" style={{backgroundImage: "url(./blurrLesson.png)"}}>
        <div className="text-center text-white flex flex-col gap-5">
          <h2 className="text-6xl text-black max-sm:text-5xl max-sm:ml-5 font-semibold">Learn from the Best.</h2>
          <h3 className="text-7xl max-sm:text-4xl max-sm:ml-5 font-semibold">Learn. Grow. Thrive.</h3>
          <p className="text-2xl max-sm:text-xl max-sm:w-[90%] max-sm:ml-6 font-semibold">Our mentors know exactly how it feels to start from zero. They are experts in Web Development and Game Development <br /> who are here to support you every day. At GOA, we don't just give you lessons. we give you a team that wants you to succeed. Our crew leaders will <br /> help you in everything you might have a problem in, they will help you reach the programming peak.</p>
        </div>
      </section>
    </>
  )
}

export default Hero