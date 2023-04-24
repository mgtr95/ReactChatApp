import React, { useState } from "react";
import styles from "./LoginContainer.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginContainer({ chatRoute, handleLoginSubmit }) {
    const [text, setText] = useState("");
    const [avatar, setAvatar] = useState("");
    const [channel, setChannel] = useState("");
    const [roomName, setRoomName] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (text.trim() === "") return;

        handleLoginSubmit(text, avatar, channel, roomName);
        setText("");
        navigate(chatRoute);
    }

    function handleTextChange(e) {
        const value = e.target.value;
        setText(value);
    }

    function handleAvatarChange(e) {
        const value = e.target.value;
        setAvatar(value);
    }

    function handleChannelChange(e) {
        const value = e.target.value;
        setChannel(value);
    }

    function handleroomNameChange(e) {
        const value = e.target.value;
        setRoomName(value);
    }

    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <label>
                    Channel ID
                    <input
                        type="text"
                        name="channel"
                        autoComplete="on"
                        placeholder="channel ID"
                        value={channel}
                        onChange={handleChannelChange}
                    />
                </label>
                <label>
                    Room name
                    <input
                        type="text"
                        name="room"
                        autoComplete="on"
                        placeholder="room name"
                        value={roomName}
                        onChange={handleroomNameChange}
                    />
                </label>
                <label>
                    Username
                    <input
                        type="text"
                        placeholder="username"
                        value={text}
                        onChange={handleTextChange}
                    />
                </label>
                <label>
                    Avatar
                    <select
                        name="avatars"
                        id="avatars"
                        placeholder="select avatar"
                        value={avatar}
                        onChange={handleAvatarChange}
                    >
                        <option value="" disabled defaultValue hidden>
                            select avatar
                        </option>
                        <option value="&#x1F600;">&#x1F600;</option>
                        <option value="&#x1F601;">&#x1F601;</option>
                        <option value="&#x1F602;">&#x1F602;</option>
                        <option value="&#x1F603;">&#x1F603;</option>
                        <option value="&#x1F604;">&#x1F604;</option>
                        <option value="&#x1F605;">&#x1F605;</option>
                        <option value="&#x1F606;">&#x1F606;</option>
                        <option value="&#x1F607;">&#x1F607;</option>
                        <option value="&#x1F608;">&#x1F608;</option>
                        <option value="&#x1F609;">&#x1F609;</option>
                        <option value="&#x1F60A;">&#x1F60A;</option>
                        <option value="&#x1F60B;">&#x1F60B;</option>
                        <option value="&#x1F60C;">&#x1F60C;</option>
                        <option value="&#x1F60D;">&#x1F60D;</option>
                        <option value="&#x1F60E;">&#x1F60E;</option>
                    </select>
                </label>
                <button
                    className={styles.loginButton}
                    type="submit"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <p>Powered by Scaledrone</p>
            </form>
        </div>
    );
}
