import {Dropdown, Nav, Navbar, NavLink} from "react-bootstrap";
import {GearFill} from "react-bootstrap-icons";
import DropdownButton from "./DropdownButton";
import {SettingsContext, users} from "../data/Settings";
import {useContext} from "react";
import plLanguage from "../langs/plLanguage";
import enLanguage from "../langs/enLanguage";
import {useNavigate} from "react-router-dom";

let NavigationBar = () => {
    const [settings, setSettings] = useContext(SettingsContext);

    const navigate = useNavigate();

    let languages = ["Polski", "English"];
    let modes = [settings.lang.light, settings.lang.dark];

    let onModeChange = (e) => {
        settings.bgDark = e !== "0";
        setSettings({...settings})
    }

    let onLanguageChange = (e) => {
        settings.language = languages[e];
        if (e === (0).toString()) {
            settings.lang = plLanguage();
        } else {
            settings.lang = enLanguage();
        }
        setSettings({...settings})
    }

    let onUserChange = (e) => {
        settings.user = users[e]
        setSettings({...settings})
    }

    return <Navbar className={`navbar-custom navbar-expand-xxl ${settings.bgDark && "navbar-custom-dark"}`}>
        <Nav className={"me-auto"}>
            <NavLink onClick={e => {
                e.preventDefault();
                navigate("/")
            }}
                     className={`title-text ${settings.bgDark && "text-white"}`}>{settings.lang.title}</NavLink>
        </Nav>
        <Nav>
            {settings.auth &&
                <DropdownButton title={settings.user} menu="dropdown-menu-end" action={onUserChange}>
                    {users.map((usr, number) => {
                            return (
                                <Dropdown.Item className={"normal-text"} eventKey={number}
                                               key={number}>{usr}</Dropdown.Item>
                            )
                        }
                    )}
                </DropdownButton>}
            <DropdownButton toggle={
                <Dropdown.Toggle className={`gear-button`}>
                    <div className={"gear-absolute-position"}>
                        <GearFill
                            className={`icon-gear ${settings.bgDark && "gear-button-dark"}`}/>
                    </div>
                </Dropdown.Toggle>
            } menu="dropdown-menu-end">

                <p className={"normal-text drop-down-toggle-position"}>{settings.lang.language}</p>
                <DropdownButton title={settings.language} position={"drop-down-toggle-position"}
                                action={onLanguageChange} menu="dropdown-menu-end">
                    {languages.map((lang, number) => {
                            return (<Dropdown.Item
                                className={"normal-text to-left-item"} eventKey={number}
                                key={number}>{lang}</Dropdown.Item>)
                        }
                    )}
                </DropdownButton>

                <p className={"normal-text drop-down-toggle-position"}>{settings.lang.mode}</p>
                <DropdownButton title={settings.bgDark ? modes[1] : modes[0]} position={"drop-down-toggle-position"}
                                action={onModeChange} menu="dropdown-menu-end">
                    {modes.map((mode, number) => {
                        return (
                            <Dropdown.Item eventKey={number} key={number}
                                           className={"normal-text to-left-item"}>{mode}</Dropdown.Item>
                        )
                    })
                    }
                </DropdownButton>
            </DropdownButton>
        </Nav>
    </Navbar>
}

export default NavigationBar;
