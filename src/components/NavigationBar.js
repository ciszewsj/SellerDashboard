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
                <Dropdown.Toggle style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    margin: "5px",
                    padding: "0",
                    textAlign: "center"
                }}>
                    <div style={{
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    }}>
                        <GearFill
                            className={"icon-gear"}
                            style={{
                                position: "absolute",
                                left: "0"
                            }}/>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={"dropdown-menu-end"}>
                    <Dropdown className="my-dropdown">
                        <p style={{margin: 0, marginLeft: "10px"}} className={"normal-text"}>Język</p>
                        <Dropdown.Toggle className={"drop-down-custom normal-text"}
                                         style={{margin: 0, marginLeft: "10px"}}
                                         id="dropdown-basic">
                            Polski
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item style={{margin: 0}}
                                           className={"normal-text"}>Polski</Dropdown.Item>
                            <Dropdown.Item style={{margin: 0}}
                                           className={"normal-text"}>English</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="my-dropdown">
                        <p style={{margin: 0, marginLeft: "10px"}} className={"normal-text"}>Motyw</p>
                        <Dropdown.Toggle className={"drop-down-custom normal-text"}
                                         style={{margin: 0, marginLeft: "10px"}}
                                         id="dropdown-basic">
                            Jasny
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item style={{margin: 0}}
                                           className={"normal-text"}>Jasny</Dropdown.Item>
                            <Dropdown.Item style={{margin: 0}}
                                           className={"normal-text"}>Ciemny</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Menu>
            </Dropdown>

        </Nav>
    </Navbar>
}

export default NavigationBar;
