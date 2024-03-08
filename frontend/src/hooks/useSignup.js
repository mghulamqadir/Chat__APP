import { useState } from "react"
import toast from "react-hot-toast"

const useSignup = () => {
    const [loading, setLoading] = useState(false)

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

            if (res.ok) {
                const data = await res.json();
                if (data.error == "duplicate User") {
                    toast.error("duplicate error");
                }
            } else {
                const errorData = await res.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }


    }
    return { loading, signup }
}



export default useSignup

async function handleInputError({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please Fill the All Fields')
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