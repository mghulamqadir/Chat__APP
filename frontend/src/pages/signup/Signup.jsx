import GenderCheckBox from "./genderCheckBox"

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-400">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter Name" className="w-full input input-bordered h-10 " />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="label-text text-base">
                                Username
                            </span>
                        </label>
                        <input type="text" placeholder="Enter the Username" className="w-full input input-bordered h-10 " />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-base">
                                Password
                            </span>
                        </label>
                        <input type="password" placeholder="Enter the Password" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-base">
                                Confirm Password
                            </span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                    </div>

                    {/* Gender check Box */}

                    <GenderCheckBox />

                    <a href="#" className="text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have Account?
                    </a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Register</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignUp
