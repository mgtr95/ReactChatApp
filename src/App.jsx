import React, { useState } from "react";
import "./App.css";
import MembersContainer from "./Components/MembersContainer/MembersContainer";
import MessagesContainer from "./Components/MessagesContainer/MessagesContainer";
import LoginContainer from "./Components/LoginContainer/LoginContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  const [members, setMembers] = useState(null);
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState(null);

  const handleSend = (textData) => {
    drone.publish({
      room: "observable-mg_channel1",
      message: textData,
    });
  };

  const handleLoginSubmit = (text, avatar) => {
    const droneInstance = new window.Scaledrone("mOtpDWAhBaxxXaft", {
      data: {
        name: text,
        avatar: avatar,
      },
    });

    const room = droneInstance.subscribe("observable-mg_channel1");

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
      const side =
        message.clientId === droneInstance.clientId ? "right" : "left";
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: message, side: side },
      ]);
    });

    setDrone(droneInstance);
  };

  const LOGIN_ROUTE = "/";
  const CHAT_ROUTE = "/chat";

  return (
    <div className="container">
      <Routes>
        <Route
          path={LOGIN_ROUTE}
          element={
            <LoginContainer
              handleLoginSubmit={handleLoginSubmit}
              chatRoute={CHAT_ROUTE}
            />
          }
        />
        <Route
          path={CHAT_ROUTE}
          element={[
            <MembersContainer members={members} />,
            <MessagesContainer
              handleMessageSending={handleSend}
              messages={messages}
            />,
          ]}
        />
      </Routes>
    </div>
  );
}

export default App;
