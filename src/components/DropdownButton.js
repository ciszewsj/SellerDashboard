import {Dropdown} from "react-bootstrap";

let DropdownButton = ({title, children, position, toggle, menu}) => {

    return <Dropdown className={`my-dropdown dropdown-menu-end`}>
        {
            toggle ? toggle :
                <Dropdown.Toggle className={`drop-down-custom ${position}`} id="dropdown-basic">
                    {title}
                </Dropdown.Toggle>
        }
        <Dropdown.Menu className={`dropdown-menu-dark ${menu}`}>
            {children}
        </Dropdown.Menu>
    </Dropdown>
}

export default DropdownButton
