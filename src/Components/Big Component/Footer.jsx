function Footer() {
  return (
    <>
      <footer className="p-15 flex flex-col bg-[#191A1B] text-white">
        <div className="w-full flex justify-evenly max-sm:flex-col max-sm:gap-10 max-md:flex-col max-md:gap-10 max-xl:gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl opacity-85">GOA</h3>
            <p className="text-2xl max-xl:text-xl">Welcome to academia, a dynamic technology <br /> solutions provider with a mission to empower <br /> businesses and individuals with cutting-edge <br /> technology solutions.</p>
          </div>

          <div className="flex flex-col gap-1 text-xl max-xl:text-base">
            <h3 className="text-2xl">Quick Links</h3>
            <span>Home</span>
            <span>Courses</span>
            <span>About us</span>
            <span>Gallery</span>
            <span>FAQs</span>
          </div>

          <div className="flex flex-col gap-3 text-xl max-xl:text-base">
            <h3 className="text-2xl">Contact</h3>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot"></i>
              Tbilisi
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-envelope"></i>
              goaacademy@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-phone"></i>
              +995 123 456 789
            </span>
          </div>

          <div className="flex flex-col gap-3 max-xl:text-base">
            <h3 className="text-2xl ">Join us on</h3>
            <div className="flex gap-3">
              <i className="fa-brands fa-facebook text-2xl cursor-pointer max-xl:text-base"></i>
              <i className="fa-brands fa-instagram text-2xl cursor-pointer max-xl:text-base"></i>
              <i className="fa-brands fa-linkedin-in text-2xl cursor-pointer max-xl:text-base"></i>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer