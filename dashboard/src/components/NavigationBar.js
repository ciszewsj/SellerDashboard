import {Dropdown, Nav, Navbar, NavLink} from "react-bootstrap";
import {GearFill} from "react-bootstrap-icons";

let NavigationBar = () => {
    return <Navbar className={"navbar-custom navbar-expand-xxl"}>
        <Nav className={"me-auto"}>
            <NavLink to={"/"} className={"title-text"}>Panel sprzedawcy</NavLink>
        </Nav>
        <Nav>
            <Dropdown className="my-dropdown">
                <Dropdown.Toggle className={"drop-down-custom"} id="dropdown-basic">
                    Konto1
                </Dropdown.Toggle>
            </Dropdown>
            <GearFill className={"icon-gear"}/>
        </Nav>
    </Navbar>
}

export default NavigationBar;
