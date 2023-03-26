import React, { useState } from "react";
import "./App.css";
import MembersContainer from "./Components/MembersContainer/MembersContainer";
import MessagesContainer from "./Components/MessagesContainer/MessagesContainer";
import { getRandomName, getRandomColor } from "./scripts/getRandom.js";

function App() {
    const [members, setMembers] = useState(null);
    const [messages, setMessages] = useState(null);

    const CHANNEL_ID = "PpOGDNqHIEJBEr4Z";
    const drone = new window.Scaledrone(CHANNEL_ID, {
        data: {
            //random user name, surname, and color
            name: getRandomName(),
            color: getRandomColor(),
        },
    });

    drone.on("open", (error) => {
        if (error) {
            return console.error(error);
        }
        console.log("Successfully connected to Scaledrone");

        //joining room
        const room = drone.subscribe("observable-mg_channel1");
        room.on("open", (error) => {
            if (error) {
                return console.error(error);
            }
            console.log("Successfully joined room");
        })

            //list of online members
            .on("members", (m) => {
                members = m;
                updateMembersDOM(members);
            })

            //user joined room
            .on("member_join", (member) => {
                members.push(member);
                updateMembersDOM(members);
            })

            //user left room
            .on("member_leave", ({ id }) => {
                const index = members.findIndex((member) => member.id === id);
                members.splice(index, 1);
                updateMembersDOM(members);
            })

            .on("message", (message) => {
                const { data, clientId, member } = message;
                const side =
                    clientId === drone.clientId
                        ? "message-right"
                        : "message-left";
                createMessageElement(data, member, side);
            });

        //sending message
        DOM.form.addEventListener("submit", sendMessage);

        function sendMessage() {
            const value = DOM.input.value;
            if (value === "") {
                return;
            }
            DOM.input.value = "";
            drone.publish({
                room: "observable-mg_channel1",
                message: value,
            });
        }
    });

    return (
        <div className="container">
            <MembersContainer />
            <MessagesContainer />
        </div>
    );
}

export default App;
