import {useContext} from "react";
import {SettingsContext} from "../data/Settings";
import {useNavigate} from "react-router-dom";

let NavigationText = ({link}) => {
    const [settings] = useContext(SettingsContext);

    const navigate = useNavigate();

    return (
        <a href={link ? link : "/"} className={"normal-text link-text widget-link"} onClick={
            event => {
                event.preventDefault();
                navigate(link)
            }
        }>
            {settings.lang.goToSite}
        </a>
    )
}
export default NavigationText;
