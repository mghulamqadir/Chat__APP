import { Link } from "react-router-dom"
import GenderCheckBox from "./genderCheckBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"
import toast from "react-hot-toast"

const SignUp = () => {


    const [inputs, setInputs] = useState({
        fullName: '',
        username: "",
        password: '',
        confirmPassword: "",
        gender: ""
    })

    // eslint-disable-next-line no-unused-vars
    const { loading, signup } = useSignup()

    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await signup(inputs);
        if (result?.error) {
            toast.error("duplicate username")
        }

    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-400">
                    SignUp
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter Name" className="w-full input input-bordered h-10 " value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="label-text text-base">
                                Username
                            </span>
                        </label>
                        <input type="text" placeholder="Enter the Username" className="w-full input input-bordered h-10 "
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-base">
                                Password
                            </span>
                        </label>
                        <input type="password" placeholder="Enter the Password" className="w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-base">
                                Confirm Password
                            </span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    {/* Gender check Box */}

                    <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className="text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have Account?
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Register</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignUp
