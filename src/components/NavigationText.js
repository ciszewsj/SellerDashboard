import {useContext} from "react";
import {SettingsContext} from "../data/Settings";

let NavigationText = ({link}) => {
    const [settings] = useContext(SettingsContext);

    return (
        <a href={link ? link : "/"} className={"normal-text link-text widget-link"}>
            {settings.lang.goToSite}
        </a>
    )
}
export default NavigationText;
