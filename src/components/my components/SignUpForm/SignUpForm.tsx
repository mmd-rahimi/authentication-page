import { useAuth } from "@/contexts/AuthContext";
import { registerSchema, type RegisterFormData } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { NavLink } from "react-router";

function SignUpForm() {
  const { register: registerUser, isLoading: authLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  });

    const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    const result = await registerUser(data);
    setIsSubmitting(false);
    
    if (!result.success) {
      toast.error(result.error || 'unknown error');
    }
  });

  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="font-bold text-3xl">User Sign Up</div>

          <div className="flex flex-col justify-center items-center gap-3">
            {/* inputs */}
            {/* name */}
            <div>
              <input id="name"
                {...register("name")}
                className={`border px-5 py-2 rounded-3xl w-[18rem] ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                placeholder="name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Username */}
            <div>
              <input id="username"
                {...register("username")}
                className={`border px-5 py-2 rounded-3xl w-[18rem] ${
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
              <input id="password"
                {...register("password")}
                className={`border px-5 py-2 rounded-3xl w-[18rem] ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                type={showPassword ? "text" : "password"}
                placeholder="password"
              />
              <button
                type="button"
                className="absolute right-2 top-98"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* confirm Password */}
            <div>
              <input id="confirmpassword"
                {...register("confirmPassword")}
                className={`border px-5 py-2 rounded-3xl w-[18rem] ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="confirm password"
              />
              <button
                type="button"
                className="absolute right-2 top-110"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {/* navigate link */}
            <div className="flex flex-row justify-start items-center w-full px-2">
              <NavLink to="/" className="underline">
                already have an account?
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className={`mt-2 flex flex-row justify-center items-center bg-black dark:bg-white rounded-3xl text-white dark:text-black hover:opacity-75 transition duration-100 ${
            isSubmitting || authLoading ? "opacity-70" : ""
          }`}
        >
          <button
            className="flex justify-center items-center w-[8rem] h-[2.5rem] text-xl cursor-pointer"
            type="submit"
            disabled={isSubmitting || authLoading}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
