import {Dropdown} from "react-bootstrap";

let DropdownButton = ({title, children, position, toggle, menu, action}) => {
    return <Dropdown className={`my-dropdown dropdown-menu-end`} onSelect={e => {
        if (action != null) {
            action(e)
        }
    }
    }>
        {
            toggle ? toggle :
                <Dropdown.Toggle className={`drop-down-custom ${position}`} id="dropdown-basic">
                    {title}
                </Dropdown.Toggle>
        }
        <Dropdown.Menu className={`${menu}`}>
            {children}
        </Dropdown.Menu>
    </Dropdown>
}

export default DropdownButton
