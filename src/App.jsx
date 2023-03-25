import React from "react";
import "./App.css";
import MembersContainer from "./Components/MembersContainer/MembersContainer";
import MessagesContainer from "./Components/MessagesContainer/MessagesContainer";

function App() {
    return (
        <div className="container">
            <MembersContainer />
            <MessagesContainer />
        </div>
    );
}

export default App;
