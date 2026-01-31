import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

function ContactUs() {
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "674fd82d-643e-45d7-b1fb-22fe0d0e9613";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <>
      <section className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 p-5">
        <div className="shadow-lg p-5 rounded-2xl flex flex-col md:flex-row gap-8 bg-white w-full max-w-5xl">
          <div className="w-full md:w-1/2 lg:w-125 bg-black rounded-3xl flex flex-col justify-between p-7 text-white max-md:mt-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                Contact Information
              </h2>
              <p className="opacity-80 text-lg md:text-xl">
                Say something to us
              </p>
            </div>

            <div className="flex flex-col gap-6 my-8">
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-phone text-xl"></i>
                <p>+995 123 456 789</p>
              </div>

              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-envelope text-xl"></i>
                <p>asian@gmail.com</p>
              </div>

              <div className="flex gap-4 items-start">
                <i className="fa-solid fa-location-dot text-xl mt-1"></i>
                <p>
                  132 Dartmouth Street Boston, <br /> Massachusetts 02156 United
                  States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <i className="fa-brands fa-instagram text-2xl hover:text-gray-400 cursor-pointer"></i>
              <i className="fa-brands fa-facebook text-2xl hover:text-gray-400 cursor-pointer"></i>
              <i className="fa-brands fa-discord text-2xl hover:text-gray-400 cursor-pointer"></i>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center py-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Enter your name: </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="border rounded-lg p-2.5 focus:border-green-600 outline-none transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold">Enter your Email: </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="border rounded-lg p-2.5 focus:border-green-600 outline-none transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold">Enter your Phone: </label>
                <input
                  type="text"
                  {...register("phone", { required: true })}
                  className="border rounded-lg p-2.5 focus:border-green-600 outline-none transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold">Text here: </label>
                <textarea
                  {...register("message", { required: true })}
                  className="border rounded-lg p-2.5 focus:border-green-600 outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-800 transition-all duration-300 cursor-pointer"
              >
                Submit Form
              </button>

              {result && (
                <p
                  className={`text-center mt-2 ${isSuccess ? "text-green-600" : "text-red-600"}`}
                >
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src="https://cdn.dribbble.com/userupload/24405183/file/original-7e974ceca651feb6123f2ac24cf57f42.gif"
            className="rounded-2xl h-auto max-h-125 object-cover"
            alt="xD"
          />
        </div>
      </section>
    </>
  );
}

export default ContactUs;
