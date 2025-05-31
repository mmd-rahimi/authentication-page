
function LoginForm() {
  return (
    <div className=''>
        <div className='flex flex-col gap-10 justify-center items-center'>

            <div className="font-bold text-3xl">User Login</div>

            <div className='flex flex-col justify-center items-center gap-3'>
                <div>
                <input className="border px-5 py-3 rounded-xl" type="text" placeholder='username'/>
                </div>
                <div>
                <input className="border px-5 py-3 rounded-xl" type="text" placeholder='password'/>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
            <div>sign up</div>
            <div>caecwc</div>
            </div>

            <div className=" flex flex-row bg-red-500">
                <button className="">submit</button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm