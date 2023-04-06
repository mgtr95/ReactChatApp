import React, { useState } from "react";
import "./App.css";
import MembersContainer from "./Components/MembersContainer/MembersContainer";
import MessagesContainer from "./Components/MessagesContainer/MessagesContainer";
import LoginContainer from "./Components/LoginContainer/LoginContainer";
import { Route, Routes } from "react-router-dom";
import LogoutPrompt from "./Components/LogoutPrompt/LogoutPrompt";

function App() {
  const [members, setMembers] = useState(null);
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState(null);
  const [observableRoom, setObservableRoom] = useState("");

  const handleSend = (textData) => {
    drone.publish({
      room: "observable-" + observableRoom,
      message: textData,
    });
  };

  if (drone) {
    drone.on("close", () => {
      setMembers(null);
      setMessages([]);
      setDrone(null);
      setObservableRoom("");
    });
  }

  const handleLoginSubmit = (text, avatar, channel, roomName) => {
    const droneInstance = new window.Scaledrone(channel, {
      data: {
        name: text,
        avatar: avatar,
      },
    });

    const room = droneInstance.subscribe("observable-" + roomName);

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

    setObservableRoom(roomName);
    setDrone(droneInstance);
  };

  const LOGIN_ROUTE = "/";
  const CHAT_ROUTE = "/chat";
  const LOGOUT_ROUTE = "/prompt";

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
            <MembersContainer
              members={members}
              logoutRoute={LOGOUT_ROUTE}
              drone={drone}
            />,
            <MessagesContainer
              handleMessageSending={handleSend}
              messages={messages}
            />,
          ]}
        />
        <Route
          path={LOGOUT_ROUTE}
          element={
            <LogoutPrompt
              loginRoute={LOGIN_ROUTE}
              chatRoute={CHAT_ROUTE}
              drone={drone}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
