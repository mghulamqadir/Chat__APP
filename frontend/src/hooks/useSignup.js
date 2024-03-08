import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputError({ fullName, username, password, confirmPassword, gender })

        if (!success) return;

        setLoading(true)

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: fullName,
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                    gender: gender,
                }),
            });

            const data = await res.json();
            if (res.ok) {
                if (data.error === "duplicate User") {
                    toast.error("duplicate error");
                }

            } else {
                const errorData = await res.json();
                throw new Error(errorData.message);
            }
            // localStorage
            localStorage.setItem("Chat-User", JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }


    }
    return { loading, signup }
}



export default useSignup

function handleInputError({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName.trim()) {
        toast.error('Enter the Full name')
        return false
    }
    if (!username) {
        toast.error('Please Enter the valid Username')
        return false
    }
    if (!gender) {
        toast.error('Check the Gender')
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Password Doesn't Match")
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be At least 6 Character")
        return false
    }


    return true
}