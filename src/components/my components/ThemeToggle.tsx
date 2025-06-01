import { useTheme } from "@/contexts/ThemeContext";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-row justify-center items-center rounded-full cursor-pointer text-black dark:text-white hover:bg-black dark:hover:bg-white transition-all duration-300 hover:text-white dark:hover:text-black">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full focus:outline-none cursor-pointer"
        aria-label={`Change to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <span className="text-3xl">
            <IoMoon />
          </span>
        ) : (
          <span className="text-3xl">
            <IoMdSunny />
          </span>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
