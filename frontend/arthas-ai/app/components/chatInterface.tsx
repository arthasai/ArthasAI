import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

type MessageProps = {
  sender: string;
  text: string;
  timestamp: number;
};

const formatDate = (timestamp: number) => {
  // format date 2:20 PM - 3/11/2024
  const date = new Date(timestamp);
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return `${formattedTime} - ${formattedDate}`;
};

const Message = (
  { sender, text, timestamp }: MessageProps // show text, differentiate from user and assistant
) => (
  <div
    className={`message ${
      sender === "user" ? "user-message" : "assistant-message"
    }`}
  >
    <div className=" px-1 flex justify-between items-center timestamp text-xs text-gray-500">
      <span className="text-[1.2rem] font-bold py-2  text-black text-[15px] ">
        {sender}
      </span>
      <span className="">{`${formatDate(timestamp)}`}</span>
    </div>

    <div className=" px-1 text ">{text}</div>
  </div>
);

const ChatInterface = () => {
  const [messages, setMessages] = useState([] as MessageProps[]); // store messages

  const [inputText, setInputText] = useState(""); // store input

  const messagesEndRef = useRef<null | HTMLDivElement>(null); // reference to know where to scroll and when

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const sendMessage = () => {
    // send message
    const newMessage = {
      sender: "User",
      text: inputText,
      timestamp: Date.now(),
    };

    setMessages([...messages, newMessage]);
    setInputText(""); // clear input
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    // send message on enter
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    // scroll to bottom when new message is added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]);

  return (
    <div className=" h-full min-h-40 bg-white  rounded-md flex flex-col justify-between">
      <div className="flex-1 overflow-y-auto">
        {" "}
        {/* show messages custom no-scrollbar class to remove automatic scrollbar from overflow-y-auto*/}
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex justify-between items-center pb-1 pl-1 pt-[0.1rem]">
        <Input /* input for user to type message */
          className="flex-1"
          type="email"
          placeholder="Type your message here"
          value={inputText}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />
        <div className=" px-1 w-6 h-6 hover:cursor-pointer" onClick={sendMessage}>
          <Send />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
