import {Dropdown, Nav, Navbar, NavLink} from "react-bootstrap";
import {GearFill} from "react-bootstrap-icons";
import DropdownButton from "./DropdownButton";

let NavigationBar = () => {
    return <Navbar className={"navbar-custom navbar-expand-xxl"}>
        <Nav className={"me-auto"}>
            <NavLink to={"/"} className={"title-text"}>Panel sprzedawcy</NavLink>
        </Nav>
        <Nav>
            <DropdownButton title={"Konto1"}>
                <Dropdown.Item className={"normal-text"}>Konto1</Dropdown.Item>
                <Dropdown.Item className={"normal-text"}>Konto2</Dropdown.Item>
                <Dropdown.Item className={"normal-text"}>Konto3</Dropdown.Item>
            </DropdownButton>
            <DropdownButton toggle={
                <Dropdown.Toggle className={"gear-button"}>
                    <div className={"gear-absolute-position"}>
                        <GearFill
                            className={"icon-gear"}/>
                    </div>
                </Dropdown.Toggle>

            } menu="dropdown-menu-end">
                <p className={"normal-text drop-down-toggle-position"}>Język</p>
                <DropdownButton title={"Polski"} position={"drop-down-toggle-position"}>
                    <Dropdown.Item
                        className={"normal-text to-left-item"}>Polski</Dropdown.Item>
                    <Dropdown.Item
                        className={"normal-text to-left-item"}>English</Dropdown.Item>
                </DropdownButton>

                <p className={"normal-text drop-down-toggle-position"}>Motyw</p>
                <DropdownButton title={"Jasny"} position={"drop-down-toggle-position"}>
                    <Dropdown.Item
                        className={"normal-text to-left-item"}>Jasny</Dropdown.Item>
                    <Dropdown.Item
                        className={"normal-text to-left-item"}>Ciemny</Dropdown.Item>
                </DropdownButton>
            </DropdownButton>
        </Nav>
    </Navbar>
}

export default NavigationBar;
