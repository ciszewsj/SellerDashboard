import {useContext, useEffect} from "react";
import {SettingsContext, users} from "../data/Settings";
import User1Data from "../data/User1Data";
import User2Data from "../data/User2Data";
import User3Data from "../data/User3Data";

let DataLoader = () => {
    const [settings, setSettings] = useContext(SettingsContext);

    useEffect(() => {
            if (users[0] === settings.user) {
                settings.data = User1Data();
            } else if (users[1] === settings.user) {
                settings.data = User2Data();
            } else {
                settings.data = User3Data();
            }
            setSettings({...settings})
        }, [...settings.user]
    );

    return <></>
}

export default DataLoader;
