import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [success, setSuccess] = useState("");
  const nav = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-2 bg-blue-50 rounded-2xl p-8 w-100">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-bold text-green-600 text-4xl">Sign Up</h2>
            <p className="opacity-55">Sign up with comfort</p>
          </div>

          <div className="flex gap-3 justify-center">
            <div className="flex gap-2 justify-center items-center bg-gray-50 p-2 rounded-2xl hover:bg-[#e5e7eb62] transition-all duration-300 cursor-pointer">
              <i className="fa-brands fa-square-facebook text-blue-600 text-2xl"></i>
              <span className="text-gray-700 text-lg font-medium">
                Facebook
              </span>
            </div>

            <div className="flex gap-2 justify-center items-center bg-gray-50 rounded-2xl p-2 hover:bg-[#e5e7eb62] transition-all duration-300 cursor-pointer">
              <i className="fa-brands fa-square-google-plus text-2xl"></i>
              <span className="text-gray-700 text-lg font-medium">Google</span>
            </div>
          </div>

          <form
            className="flex flex-col gap-2 mt-2"
            onSubmit={handleSubmit((data) => {
              const existingUsers =
                JSON.parse(localStorage.getItem("userData")) || [];

              const emailUsed = existingUsers
                ? existingUsers.find((user) => user.email === data.email)
                : undefined;

              if (emailUsed) {
                setError("email", {
                  type: "custom",
                  message: "This Email Is Already Registered!",
                });

                return;
              }

              data.status = "User";

              existingUsers.push(data);
              localStorage.setItem("userData", JSON.stringify(existingUsers));
              console.log(data);

              setSuccess("User Registered Succesfully!");

              setTimeout(() => {
                setSuccess("");
              }, 1000);
              nav("../Login")
            })}
          >
            <input
              type="text"
              placeholder="Name"
              className="placeholder:opacity-50 border-2 rounded-2xl p-2 focus:border-green-600 focus:outline-none placeholder:font-semibold transition-all duration-300"
              {...register("name", {
                required: "Value is Required!",
                maxLength: { value: 20, message: "Max length 20 symbols" },
              })}
            />

            <p className="text-red-500 font-semibold">
              {errors?.name?.message}
            </p>

            <input
              type="text"
              placeholder="Email"
              className="placeholder:opacity-50 border-2 rounded-2xl p-2 focus:border-green-600 focus:outline-none placeholder:font-semibold transition-all duration-300"
              {...register("email", {
                required: "Value is Required!",
                validate: (value) =>
                  value.endsWith("@gmail.com") || "Invalid Email!",
              })}
            />

            <p className="text-red-500 font-semibold">
              {errors?.email?.message}
            </p>

            <input
              type="password"
              placeholder="Password"
              className="placeholder:opacity-50 border-2 rounded-2xl p-2 focus:border-green-600 focus:outline-none placeholder:font-semibold transition-all duration-300"
              {...register("password", {
                required: "Value is Required!",
                minLength: {
                  value: 6,
                  message: "Min length should be 6 letters!",
                },
              })}
            />
            <p className="text-red-500 font-semibold">
              {errors?.password?.message}
            </p>

            {success ? (
              <p className="text-green-600 font-semibold text-center mt-1">
                {" "}
                {success}{" "}
              </p>
            ) : (
              ""
            )}

            <div className="flex flex-col justify-start gap-3 mt-4">
              <input
                type="submit"
                className="bg-green-600 rounded-2xl text-white p-1.5 font-semibold hover:bg-gray-700 transition-al duration-300 cursor-pointer w-full"
              />

              <span>
                Do you have account?{" "}
                  <b className="text-blue-500 font-medium cursor-pointer hover:text-blue-800 transition-all duration-300" onClick={() => {nav("../Login")}}>
                    Sign In
                  </b>
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
