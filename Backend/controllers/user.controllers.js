import User from "../models/user.models.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id

        const filteredUser = await User.find({ _id: { $ne: loggedInUserId } }).select('-password')

        res.status(200).json(filteredUser)

    } catch (error) {
        console.error('Error is getUserForSideBar', error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}