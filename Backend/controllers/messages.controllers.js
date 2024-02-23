import Conservation from "../models/conservation.models.js"
import Message from "../models/message.models.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let conservation = await Conservation.findOne({
            participant: { $all: [senderId, receiverId] }
        })

        if (!conservation) {
            conservation = await Conservation.create({
                participant: [senderId, receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message

        })
        if (newMessage) {
            conservation.messages.push(newMessage._id)
        }

        // await conservation.save()
        // await newMessage.save()

        // alternative 
        await Promise.all([
            conservation.save(),
            newMessage.save()
        ]);


        // console.log(newMessage);

        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({ error: "Internal server Error" })
    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id

        const conservation = await Conservation.findOne({
            participant: { $all: [senderId, userToChatId] }
        }).populate("messages")
        //for get the messages in the 

        if (!conservation) return res.status(200).json([])

        const messages = conservation.messages

        res.status(200).json(conservation.messages)
    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({ error: "Internal server Error" })
    }
}