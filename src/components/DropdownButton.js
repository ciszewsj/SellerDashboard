import {Dropdown} from "react-bootstrap";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";

let DropdownButton = ({title, children, position, toggle, menu, action}) => {
    const [settings] = useContext(SettingsContext);
    return <Dropdown className={`my-dropdown dropdown-menu-end`} onSelect={e => {
        if (action != null) {
            action(e)
        }
    }}>
        {toggle ? toggle : <Dropdown.Toggle className={`drop-down-custom ${position} `} id="dropdown-basic">
            <span className={"dropdown-text"}>{title}</span>
        </Dropdown.Toggle>}
        <Dropdown.Menu className={`${menu} ${settings.bgDark && "bg-dark text-bg-dark dropdown-menu-dark"}`}>
            {children}
        </Dropdown.Menu>
    </Dropdown>
}

export default DropdownButton
