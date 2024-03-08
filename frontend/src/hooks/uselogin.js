import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const uselogin = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setAuthUser } = useAuthContext()

    const login = async (username, password) => {

        const success = handleInputError(username, password)
        // console.log("Hello");
        if (!success) return;

        setLoading(true)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, login }
}

export default uselogin

function handleInputError(username, password) {

    if (!username) {
        toast.error('Please Enter the valid Username')
        return false
    }

    if (!password) {
        toast.error('Please Enter Password')
        return false
    }


    return true
}