import {ChevronDoubleLeft, ChevronDoubleRight, CircleFill} from "react-bootstrap-icons";
import {Dropdown} from "react-bootstrap";

let Widget = ({title, dropdown, children}) => {

    let Circles = () => {
        return <div className={"filled_button"}>
            <CircleFill/>
        </div>
    }
    return <div className={"widget-body"}>
        <div className={"widget-line"}/>
        {dropdown &&
            <Dropdown className={"widget-dropdown-position"}>
                {dropdown}
            </Dropdown>
        }
        <div className={"left-chevron-position"}>
            <ChevronDoubleLeft className={"chevron-double"}/>
        </div>

        <div className={"right-chevron-position"}>
            <ChevronDoubleRight className={"chevron-double"}/>
        </div>
        <Circles/>
        <h1 className={"title-text title-position"}>
            {title}
        </h1>
        <div className={"field-size"}>
            <div className={"field-relative-container"}>
                {children}

            </div>
        </div>
    </div>

}
export default Widget;
