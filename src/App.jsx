import React, { useEffect, useState } from "react";
import "./App.css";
import MembersContainer from "./Components/MembersContainer/MembersContainer";
import MessagesContainer from "./Components/MessagesContainer/MessagesContainer";
import { getRandomName, getRandomColor } from "./scripts/getRandom.js";

function App() {
    const [members, setMembers] = useState(null);

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
            const index = members.findIndex((member) => member.id === id);
            members.splice(index, 1);
        });
    }, []);

    //radi, ali se na pocetku kreiraju

    // //list of online members
    // room.on("members", (member) => {
    //     setMembers(member);
    // });

    //         //user joined room
    //         .on("member_join", (member) => {
    //             members.push(member);
    //             updateMembersDOM(members);
    //         })

    //         //user left room
    //         .on("member_leave", ({ id }) => {
    //             const index = members.findIndex((member) => member.id === id);
    //             members.splice(index, 1);
    //             updateMembersDOM(members);
    //         })

    //         .on("message", (message) => {
    //             const { data, clientId, member } = message;
    //             const side =
    //                 clientId === drone.clientId
    //                     ? "message-right"
    //                     : "message-left";
    //             createMessageElement(data, member, side);
    //         });
    //     //sending message
    //     DOM.form.addEventListener("submit", sendMessage);

    //     function sendMessage() {
    //         const value = DOM.input.value;
    //         if (value === "") {
    //             return;
    //         }
    //         DOM.input.value = "";
    //         drone.publish({
    //             room: "observable-mg_channel1",
    //             message: value,
    //         });
    //     }
    // });

    return (
        <div className="container">
            <MembersContainer members={members} />
            <MessagesContainer />
        </div>
    );
}

export default App;

//text iz ai-a
/**import React, { useState, useEffect } from "react";
import { getRandomName, getRandomColor } from "./getRandom.js";
import { updateMembersDOM, DOM, createMessageElement } from "./getDOM.js";

function App() {
  const [members, setMembers] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const CHANNEL_ID = "PpOGDNqHIEJBEr4Z";
    const drone = new Scaledrone(CHANNEL_ID, {
      data: {
        name: getRandomName(),
        color: getRandomColor(),
      },
    });

    const room = drone.subscribe("observable-mg_channel1");

    room.on("members", (members) => {
      setMembers(members);
      updateMembersDOM(members);
    });

    room.on("member_join", (member) => {
      setMembers((prevMembers) => [...prevMembers, member]);
      updateMembersDOM(members);
    });

    room.on("member_leave", ({ id }) => {
      setMembers((prevMembers) =>
        prevMembers.filter((member) => member.id !== id)
      );
      updateMembersDOM(members);
    });

    room.on("message", (message) => {
      const { data, clientId, member } = message;
      const side =
        clientId === drone.clientId ? "message-right" : "message-left";
      createMessageElement(data, member, side);
    });
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (value === "") {
      return;
    }
    setValue("");
    drone.publish({
      room: "observable-mg_channel1",
      message: value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.clientData.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
 */
