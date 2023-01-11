import {Dropdown, Nav, Navbar, NavLink} from "react-bootstrap";
import {GearFill} from "react-bootstrap-icons";

let NavigationBar = () => {
    return <Navbar className={"navbar-custom navbar-expand-xxl"}>
        <Nav className={"me-auto"}>
            <NavLink to={"/"} className={"title-text"}>Panel sprzedawcy</NavLink>
        </Nav>
        <Nav>
            <Dropdown className="my-dropdown dropdown-menu-end">
                <Dropdown.Toggle className={"drop-down-custom"} id="dropdown-basic">
                    Konto1
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className={"normal-text"}>Konto1</Dropdown.Item>
                    <Dropdown.Item className={"normal-text"}>Konto2</Dropdown.Item>
                    <Dropdown.Item className={"normal-text"}>Konto3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle className={"gear-button"}>
                    <div className={"gear-absolute-position"}>
                        <GearFill
                            className={"icon-gear"}/>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={"dropdown-menu-end"}>
                    <Dropdown className="my-dropdown">
                        <p className={"normal-text drop-down-toggle-position"}>Język</p>
                        <Dropdown.Toggle className={"drop-down-custom normal-text drop-down-toggle-position"}
                                         id="dropdown-basic">
                            Polski
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                className={"normal-text to-left-item"}>Polski</Dropdown.Item>
                            <Dropdown.Item
                                className={"normal-text to-left-item"}>English</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="my-dropdown">
                        <p className={"normal-text drop-down-toggle-position"}>Motyw</p>
                        <Dropdown.Toggle className={"drop-down-custom normal-text drop-down-toggle-position"}
                                         id="dropdown-basic">
                            Jasny
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                className={"normal-text to-left-item"}>Jasny</Dropdown.Item>
                            <Dropdown.Item
                                className={"normal-text to-left-item"}>Ciemny</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Menu>
            </Dropdown>

        </Nav>
    </Navbar>
}

export default NavigationBar;
