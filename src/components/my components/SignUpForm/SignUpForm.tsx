import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function SignUpForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== ConfirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const success = await register({ name, username, password });
      if (success) {
        navigate("/");
      } else {
        setError("Error in registration");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error in registration");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="font-bold text-3xl">User Sign Up</div>

          <div className="flex flex-col justify-center items-center gap-3">
            {/* inputs */}
            <div>
              <input
                className="border px-5 py-2 rounded-3xl w-[18rem]"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border px-5 py-2 rounded-3xl w-[18rem]"
                type="text"
                placeholder="username"
              />
            </div>

            <div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border px-5 py-2 rounded-3xl w-[18rem]"
                type="password"
                placeholder="password"
              />
            </div>

            <div>
              <input
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border px-5 py-2 rounded-3xl w-[18rem]"
                type="password"
                placeholder="confirm password"
              />
            </div>
            {error && (
              <p className="error text-red-500 dark:text-red-400">{error}</p>
            )}
            {/* navigate link */}
            <div className="flex flex-row justify-start items-center w-full px-2">
              <NavLink to="/" className="underline">
                already have an account?
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-row justify-center items-center bg-black dark:bg-white rounded-3xl text-white dark:text-black hover:opacity-75 transition duration-100">
          <button className="flex justify-center items-center w-[8rem] h-[2.5rem] text-xl cursor-pointer">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
