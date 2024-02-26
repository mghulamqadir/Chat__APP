import { BsSend } from 'react-icons/bs'
const MessageInput = () => {
    return (
        <form className="px-4 my-3">
            <div className="w-full relative">
                <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-500 text-white"
                    placeholder="Send A Message" />


                <button type="submit" className="absolute text-sm inset-y-0 end-0 items-center pe-3 text-white">
                    <BsSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
