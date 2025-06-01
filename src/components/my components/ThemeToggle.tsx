import { useTheme } from "@/contexts/ThemeContext";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-row justify-center items-center rounded-full cursor-pointer hover:bg-black dark:hover:bg-white transition-all duration-300">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full focus:outline-none cursor-pointer"
        aria-label={`Change to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <span className="text-3xl text-black hover:text-white">
            <IoMoon />
          </span>
        ) : (
          <span className="text-3xl text-white hover:text-black">
            <IoMdSunny />
          </span>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
