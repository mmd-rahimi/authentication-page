
function LoginModule() {
  return (
    // module container
    <div className="w-[25rem] h-[35rem] bg-white">
        {/* flex col / row 2sides of module for responsive */}
        <div className="flex flex-col">
            {/* text side */}
            <div className="bg-gray-500 w-full h-[10rem] p-4">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-3xl font-bold">Welcome</h1>
                    <p className="text-center font-[500]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non excepturi earum aliquam deleniti voluptatem provident.</p>
                </div>
            </div>
            {/* input side */}
            <div></div>
        </div>
    </div>
  )
}

export default LoginModule