import { useTheme } from "@/contexts/ThemeContext";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-row justify-center items-center rounded-full cursor-pointer hover:bg-amber-600 transition-all duration-300">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full focus:outline-none cursor-pointer"
        aria-label={`Change to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <span className="text-3xl text-blue-950">
            <IoMoon />
          </span>
        ) : (
          <span className="text-3xl text-yellow-300">
            <IoMdSunny />
          </span>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
