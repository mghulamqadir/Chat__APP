import { app } from "./app.js";
import connectToMongoDB from "./db/connect.mongo.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on ${PORT}`);
});
