import React from "react";
import styles from "./LoginContainer.module.css"

export default function LoginContainer() {
    return (
        <form class="login-form" onsubmit="return false;">
            <label class="channel-label">
                Channel ID
                <input
                    class="channel-input"
                    placeholder="channel ID"
                    type="text"
                />
            </label>
            <label class="username-label">
                Username
                <input
                    class="username-input"
                    type="text"
                    placeholder="username"
                />
            </label>
            <label class="avatar-label">
                Avatar
                <select class="avatar-dropdown" name="avatars" id="avatars">
                    <option value="1">&#x1F600;</option>
                    <option value="2">&#x1F601;</option>
                    <option value="3">&#x1F602;</option>
                    <option value="4">&#x1F603;</option>
                    <option value="5">&#x1F604;</option>
                    <option value="6">&#x1F605;</option>
                    <option value="7">&#x1F606;</option>
                    <option value="8">&#x1F607;</option>
                    <option value="9">&#x1F608;</option>
                    <option value="10">&#x1F609;</option>
                    <option value="11">&#x1F60A;</option>
                    <option value="12">&#x1F60B;</option>
                    <option value="13">&#x1F60C;</option>
                    <option value="14">&#x1F60D;</option>
                    <option value="15">&#x1F60E;</option>
                    <option value="16">&#x1F60F;</option>
                    <option value="17">&#x1F610;</option>
                    <option value="18">&#x1F611;</option>
                    <option value="19">&#x1F612;</option>
                    <option value="20">&#x1F613;</option>
                </select>
            </label>
            <input class="login-button" value="Login" type="submit" />
        </form>
    );
}
