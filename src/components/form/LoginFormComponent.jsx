import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginFormComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  // Updated submission logic to hit your endpoint
  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError("");

    try {
      const response = await fetch("https://ishop.cheat.casa/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Fallback message if the api response structure varies
        throw new Error(result?.error?.description || "Invalid email or password.");
      }

      // Handle successful authentication here
      console.log("Login Success:", result);
      
      // Example: Save token to browser local storage
      if (result.token) {
        localStorage.setItem("authToken", result.token);
      }

    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Welcome! So good to have you back!
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          
          {/* Display API response error messaging */}
          {apiError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded text-sm">
              {apiError}
            </div>
          )}

          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                placeholder="youremail@domain.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  {...register("password", { required: "Password is required" })}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="***********"
                />
                <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="block w-full py-2 text-center text-white bg-teal-500 border border-teal-500 rounded hover:bg-transparent hover:text-teal-500 transition uppercase font-roboto font-medium disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <div className="flex gap-2 pt-5">
              <p className="text-gray-600 text-sm">Don't have an account?</p>
              <a className="text-gray-600 text-sm underline" href="/register">
                Register here
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
