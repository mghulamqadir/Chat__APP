import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB Is connected");
    } catch (error) {
        console.log("Error Connecting to MONGODB", error.message);
    }
}
export default connectToMongoDB;