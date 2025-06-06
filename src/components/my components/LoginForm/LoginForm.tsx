import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const success = await login(username, password);
      if (success) {
        navigate("/Home");
      } else {
        setError("The username or password is incorrect");
      }
} catch (err) {
  if (err instanceof Error) {
    setError(`error communicating with the server: ${err.message}`);
  } else {
    setError("Unknown error communicating with the server");
  }
}
  };

  return (
    <div className="">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="font-bold text-3xl">User Login</div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center gap-3">
            {/* inputs */}
            <div>
              <input
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border px-5 py-2 rounded-3xl w-[18rem]"
                type="text"
                value={username}
                placeholder="username"
              />
            </div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border px-5 py-2 rounded-3xl w-[18rem]"
                type="password"
                value={password}
                placeholder="password"
              />
            </div>
            {/* set error */}
            {error && (
              <p className="error text-red-500 dark:text-red-400">{error}</p>
            )}
            {/* navigate link */}
            <div className="flex flex-row justify-start items-center w-full px-2">
              <NavLink to="/Creat" className="underline">
                do not already have an account?
              </NavLink>
            </div>
          </div>

          <div className="mt-2 flex flex-row justify-center items-center bg-black dark:bg-white rounded-3xl text-white dark:text-black hover:opacity-75 transition duration-100">
            <button className="flex justify-center items-center w-[8rem] h-[2.5rem] text-xl cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
