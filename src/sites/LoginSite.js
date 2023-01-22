import {useState} from "react";
import {SettingsContext, users} from "../data/Settings";
import {Button, Dropdown, Nav, NavLink} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import DropdownButton from "../components/DropdownButton";
import {Navigate} from "react-router-dom";

let LoginSite = () => {
    const [settings, setSettings] = useContext(SettingsContext);
    let [user, setUser] = useState("0")
    const navigate = useNavigate();
    return (
        <>
            {settings.auth ? <Navigate to={"/"}/> :
                <>
                    <p className={"m-4"}>{settings.lang.selectUser}</p>
                    <DropdownButton title={settings.user} menu="dropdown-menu-end" action={setUser}>
                        {users.map((usr, number) => {
                                return (
                                    <Dropdown.Item className={"normal-text"} eventKey={number}
                                                   key={number}>{usr}</Dropdown.Item>
                                )
                            }
                        )}
                    </DropdownButton>
                    <Button className={`drop-down-custom  ${settings.bgDark && "drop-down-custom-dark"}`}
                            onClick={e => {
                                e.preventDefault();
                                settings.user = users[Number(user)];
                                settings.auth = true;
                                navigate("/");
                            }}
                    >{settings.lang.login}</Button>
                </>
            }
        </>
    )
}
export default LoginSite
