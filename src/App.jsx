import React, { useEffect, useState } from "react";
import "./App.css";
import MembersContainer from "./Components/MembersContainer/MembersContainer";
import MessagesContainer from "./Components/MessagesContainer/MessagesContainer";
import { getRandomName, getRandomColor } from "./Modules/getRandom.js";

function App() {
  const [members, setMembers] = useState(null);
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const drone = new window.Scaledrone("PpOGDNqHIEJBEr4Z", {
      data: {
        name: getRandomName(),
        color: getRandomColor(),
      },
    });

    const room = drone.subscribe("observable-mg_channel1");

    room.on("members", (members) => {
      setMembers(members);
    });

    room.on("member_join", (member) => {
      setMembers((prevMembers) => [...prevMembers, member]);
    });

    room.on("member_leave", ({ id }) => {
      setMembers((prevMembers) =>
        prevMembers.filter((member) => member.id !== id)
      );
    });

    room.on("message", (message) => {
      const side = message.clientId === drone.clientId ? "right" : "left";
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: message, side: side },
      ]);
    });
    setDrone(drone);
  }, []);

  const handleSend = (textData) => {
    drone.publish({
      room: "observable-mg_channel1",
      message: textData,
    });
  };

  return (
    <div className="container">
      <MembersContainer members={members} />
      <MessagesContainer
        handleMessageSending={handleSend}
        messages={messages}
      />
    </div>
  );
}

export default App;
