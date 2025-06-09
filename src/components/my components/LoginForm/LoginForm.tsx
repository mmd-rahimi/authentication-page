import { useAuth } from "@/contexts/AuthContext";
import { loginSchema, type LoginFormData } from "@/schemas/auth";
import { useState } from "react";
import { NavLink } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, isLoading: authLoading} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
        defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    const result = await login(data);
    setIsSubmitting(false)

        if (!result.success) {
      toast.error(result.error || 'unknown error');
    }
  });

  return (
    <div className="">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="font-bold text-3xl">User Login</div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col justify-center items-center gap-3">
            {/* inputs */}
            {/* username */}
            <div>
              <input id="username"
                {...register("username")}
                className={`border px-5 py-2 rounded-3xl w-[18rem] md:w-[22rem] lg:w-[18rem] ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                placeholder="username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            {/* password */}
            <div>
              <div className="flex flex-row justify-between items-center">
                <input id="password"
                  {...register("password")}
                  className={`border px-5 py-2 rounded-3xl w-[18rem] md:w-[22rem] lg:w-[18rem] ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                />
                <button
                  className="p-2"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              {/* {error && <div className="text-red-500">{error}</div>} */}
            </div>
            {/* navigate link */}
            <div className="flex flex-row justify-start items-center w-full px-2">
              <NavLink to="/Creat" className="underline">
                do not already have an account?
              </NavLink>
            </div>
          </div>
          <div className="mt-2 flex flex-row justify-center items-center bg-black dark:bg-white rounded-3xl text-white dark:text-black hover:opacity-75 transition duration-100">
            <button className={`flex justify-center items-center w-[8rem] h-[2.5rem] text-xl cursor-pointer ${isSubmitting || authLoading ? 'opacity-70' : ''}`} disabled={isSubmitting || authLoading} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
