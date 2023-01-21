import {createContext} from "react";

let Settings = () => {
    return {
        bgDark: false,
        language: "Polski"
    }
}


export const SettingsContext = createContext({});
export default Settings
