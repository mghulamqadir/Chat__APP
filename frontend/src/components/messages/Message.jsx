const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://avatar.iran.liara.run/public/boy" alt="Boy" />
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-500">
                Hi How are you?
            </div>
            <div className="chat-footer opacity-50 text-xs text-gray-200 flex gap-1 items-center">
                Seen at 12:46
            </div>
        </div>
    )
}

export default Message
