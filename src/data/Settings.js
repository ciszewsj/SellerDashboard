import {createContext} from "react";
import plLanguage from "../langs/plLanguage";
import user1Data from "./User1Data";

let Settings = () => {
    return {
        bgDark: false,
        language: "Polski",
        lang: plLanguage(),
        data: user1Data()
    }
}


export const SettingsContext = createContext({});
export default Settings
