import { NavLink } from "react-router"

function SignUpForm() {
  return (
    <div className=''>
        <div className='flex flex-col gap-10 justify-center items-center'>

            <div className="font-bold text-3xl">User Sign Up</div>
             
            <div className='flex flex-col justify-center items-center gap-3'>
                {/* inputs */}
                <div>
                <input className="border px-5 py-2 rounded-3xl w-[18rem]" type="text" placeholder='username'/>
                </div>
                <div>
                <input className="border px-5 py-2 rounded-3xl w-[18rem]" type="text" placeholder='password'/>
                </div>
                {/* navigate link */}
               <div className="flex flex-row justify-start items-center w-full px-2">
            <NavLink to="/" className="underline">already have an account?</NavLink>
            </div>
            </div>

            <div className="flex flex-row justify-center items-center bg-red-500 rounded-3xl cursor-pointer">
                <button className="flex justify-center items-center w-[8rem] h-[2.5rem] text-xl">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default SignUpForm