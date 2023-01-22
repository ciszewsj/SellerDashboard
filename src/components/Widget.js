import {ChevronDoubleLeft, ChevronDoubleRight, Circle, CircleFill} from "react-bootstrap-icons";
import {Dropdown} from "react-bootstrap";
import {useState} from "react";

let Widget = ({title, dropdown, children}) => {
    let [page, setPage] = useState(0);
    let numberOfPages = children && children[0] ? children.length : 1;

    let setPages = (page) => {
        if (page < 0) {
            page = numberOfPages - 1;
        } else if (page >= numberOfPages) {
            page = 0;
        }
        setPage(page)
    }

    let Circles = () => {
        return (
            <div className={"navigation-buttons-position"}>
                {[...Array(numberOfPages)].map((x, number) => {
                        return (
                            <span className={"filled_button"} key={number}>
                                {
                                    page === number ?
                                        <CircleFill className={"circle-size"} onClick={() => setPages(number)}/>
                                        :
                                        <Circle className={"circle-size"} onClick={() => setPages(number)}/>
                                }
                            </span>)
                    }
                )}


            </div>)
    }
    return <div className={"widget-body"}>
        <div className={"widget-line"}/>
        {dropdown &&
            <Dropdown className={"widget-dropdown-position"}>
                {dropdown}
            </Dropdown>
        }
        <button className={"left-chevron-position"} onClick={() => setPages(page -= 1)}>
            <ChevronDoubleLeft className={"chevron-double"}/>
        </button>

        <button className={"right-chevron-position"} onClick={() => setPages(page += 1)}>
            <ChevronDoubleRight className={"chevron-double"}/>
        </button>
        <Circles/>
        <h1 className={"title-text title-position"}>
            {title}
        </h1>
        <div className={"field-size"}>
            <div className={"field-relative-container"}>
                {children && children[page]}
            </div>
        </div>
    </div>

}
export default Widget;
