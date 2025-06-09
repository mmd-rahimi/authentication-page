import ThemeToggle from "../ThemeToggle";
import SignUpForm from "./SignUpForm";

function LoginModule() {
  return (
    // module container
    <div
      className="rounded-3xl drop-shadow-2xl overflow-hidden shadow shadow-black dark:shadow-white border-black dark:border-white border-2
    w-[25rem] h-[40rem]
     sm:w-[28rem] sm:h-[40rem]
     md:w-[32rem] md:h-[40rem]
     lg:w-[60rem] lg:h-[40rem]
      grid "
    >
      {/* flex col / row 2sides of module for responsive */}
      <div className="flex flex-col lg:flex-row">
        {/* toggle theme button */}
        <div className="hidden lg:block absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        {/* text side */}
        <div className="flex justify-center items-center bg-white dark:bg-black border-black max-lg:border-b-2 lg:border-r-2 dark:border-white text-black dark:text-white w-full h-[28%] p-4 sm:py-6 lg:h-full lg:w-[60%]">
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-6">
            <h1 className="text-3xl font-bold">Welcome to sign-up page</h1>
            <p className="text-center font-[500]">
              This page is just a practice authentication page and a sample of work.
            </p>
          </div>
        </div>
        {/* input side */}
        <div className="bg-white dark:bg-black text-black dark:text-white h-[72%] w-full lg:h-full lg:w-[40%] px-6 py-4 flex flex-row justify-center items-center">
          <div className="lg:hidden block absolute top-41 right-2 sm:top-47 sm:right-2  z-10">
            <ThemeToggle />
          </div>
          <div className="flex flex-col">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModule;
