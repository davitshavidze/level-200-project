import { Link, useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("Found"));
  console.log(user);

  return (
    <>
      <header className="w-full bg-black h-25 text-white flex justify-between items-center fixed z-10 px-2 md:px-6 lg:px-8 shadow-md">
        <h1 className="font-bold whitespace-nowrap shrink-0 text-xl md:text-xl xl:text-[36px] lg-[32px]">
          <span className="max-md:hidden">
            Goal <b className="font-bold text-green-500">Oriented</b> Academy
          </span>
          <b className="font-bold text-xl md:hidden">GOA</b>
        </h1>

        <div className="flex items-center gap-4 md:gap-6 lg:gap-7">
          <h2
            className="cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full md:text-base lg:text-[20px]"
            onClick={() => nav("/")}
          >
            Home
          </h2>
          <h2
            className="cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full md:text-base lg:text-[20px]"
            onClick={() => nav("./Courses")}
          >
            Courses
          </h2>
          <h2 className="cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full md:text-sm lg:text-[20px]
          "
            onClick={() => {nav("./Mentors")}}
          >
            Mentors
          </h2>
          <h2 className="cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full md:text-base lg:text-[20px]"
            onClick={() => {nav("./Gallery")}}
          >
            Gallery
          </h2>
          <h2 className="cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full md:text-base lg:text-[20px]"
            onClick={() => {nav("./FAQ")}}
          >
            FAQs
          </h2>
        </div>

        <div className="hidden md:flex gap-2 lg:gap-5 items-center">
          <button className="rounded-xl cursor-pointer bg-white text-black font-semibold border border-white transition-all duration-300 ease-out hover:border-green-500 hover:text-green-600 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 active:translate-y-0 text-sm lg:text-base px-2.5 py-1 lg:px-6 lg:py-2.5" onClick={() => {nav("Contact")}}>
            Contact us
          </button>

          {!user && (
            <button
              className="rounded-xl cursor-pointer bg-white text-black font-semibold border border-white transition-all duration-300 ease-out hover:border-green-500 hover:text-green-600 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 active:translate-y-0 text-sm lg:text-base px-3 py-1.5 lg:px-6 lg:py-2.5"
              onClick={() => nav("./Register")}
            >
              Register
            </button>
          )}

          {user && (
            <div className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                alt="user icon"
                className="rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-white cursor-pointer object-cover"
                onClick={() => {
                  if (user.role === "Admin") {
                    nav("/Admin");
                  } else {
                    nav("/UserPage");
                  }
                }}
              />
              <div className="hidden lg:flex flex-col">
                <span className="text-white font-bold text-sm">
                  {user?.name}
                </span>
                <span className="text-white font-semibold text-xs opacity-80">
                  {user?.role}
                </span>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
