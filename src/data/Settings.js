import {createContext} from "react";
import plLanguage from "../langs/plLanguage";

let Settings = () => {
    return {
        bgDark: false,
        language: "Polski",
        lang: plLanguage()
    }
}


export const SettingsContext = createContext({});
export default Settings
