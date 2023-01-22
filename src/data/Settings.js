import {createContext} from "react";
import plLanguage from "../langs/plLanguage";
import user1Data from "./User1Data";

export const users = ["User1", "User2", "User3"]

let Settings = () => {
    return {
        bgDark: false,
        language: "Polski",
        lang: plLanguage(),
        data: user1Data(),
        user: users[0]
    }
}


export const SettingsContext = createContext({});
export default Settings
