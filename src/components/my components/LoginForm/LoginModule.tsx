import ThemeToggle from "../ThemeToggle"
import LoginForm from "./LoginForm"


function LoginModule() {

  return (
    // module container
    <div className="w-[25rem] h-[35rem]
     sm:w-[28rem] sm:h-[40rem]
     md:w-[32rem] md:h-[40rem]
     lg:w-[60rem] lg:h-[40rem]
      grid ">
        {/* flex col / row 2sides of module for responsive */}
        <div className="flex flex-col lg:flex-row">
                  {/* toggle theme button */}
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
            {/* text side */}
            <div className="bg-gray-100 dark:bg-gray-500 w-full h-[28%] p-4 sm:py-6 lg:h-full lg:w-[60%]">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-3xl font-bold">Welcome</h1>
                    <p className="text-center font-[500]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non excepturi earum aliquam deleniti voluptatem provident.</p>
                </div>
            </div>
            {/* input side */}
            <div className="bg-red-200 h-[72%] w-full lg:h-full lg:w-[40%] px-6 py-12 flex flex-row justify-center items-center">
              <div className="flex flex-col">
              <LoginForm />
              </div>
            </div>
        </div>
    </div>
  )
}

export default LoginModule