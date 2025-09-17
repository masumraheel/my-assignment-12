import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-full"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/HDJKs28s/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-passwo.jpg')`,
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h3>
                <span className="text-2xl text-lime-600 font-bold">Bongo</span>
                <span className="text-2xl text-red-800 font-bold">Tours</span>
              </h3>

              <p className="max-w-xl mt-3 text-slate-900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center lg:w-1/2 max-w-md px-6 mx-auto">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <h3>
                  <span className="text-3xl text-rose-700 font-bold">
                    Bongo
                  </span>
                  <span className="text-3xl text-cyan-800 font-bold">
                    Tours
                  </span>
                </h3>
              </div>

              <h2 className="mt-3 text-gray-500 dark:text-gray-300">
                Sign Up to create your account.
              </h2>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )}
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Mail"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.mail && <p role="alert">{errors.mail.message}</p>}
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      for="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                  </div>

                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.password && (
                    <p role="alert">{errors.password.message}</p>
                  )}
                </div>
                <div className="mt-6">
                  <input
                    className="btn btn-success w-full px-4 py-2 tracking-wide text-white rounded-lg"
                    type="submit"
                    value="Sign Up"
                    name="Sign Up"
                    id=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
