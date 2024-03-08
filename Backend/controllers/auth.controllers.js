import bcryptjs from 'bcryptjs'
import User from "../models/user.models.js"
import generateTokenAndSetCookie from "../utils/generateJWTTokens.js"

const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body


        //Hash Password

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, salt)


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const result = await User.find({ username })
        if (result.length <= 0) {
            const newUser = new User({
                fullName,
                username,
                password: hashPassword,
                gender,
                profilePic: gender === "Male" ? boyProfilePic : girlProfilePic

            })

            if (newUser) {
                //generate JWT Token
                generateTokenAndSetCookie(newUser._id, res)
                await newUser.save()

                res.status(201).json({
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    username: newUser.username,
                    profilePic: newUser.profilePic
                })
                console.log(newUser);
            } else {
                res.status(400).json({ error: "invalid User Data" })
            }
        } else {
            res.status(202).json({ error: "duplicate User" })
        }


    } catch (error) {
        console.log("Error in signup Controller:", error.message);
        res.status(500).json({ error: "Internal server Error" })
    }
}
const login = async (req, res) => {
    try {
        // console.log("Login user");
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        switch (true) {
            case !user:
                return res.status(400).json({ error: "Invalid username" });

            case !isPasswordCorrect:
                return res.status(400).json({ error: "Wrong Password" });

            default:

                break;
        }


        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logout successfully" })

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

export { login, logout, signup }