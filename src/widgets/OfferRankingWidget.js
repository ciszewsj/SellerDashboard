import Widget from "../components/Widget";
import {Image} from "react-bootstrap-icons";
import {Dropdown} from "react-bootstrap";

let OfferRankingWidget = () => {

    let OfferRankingDropdown = () => {
        return <>
            <Dropdown.Toggle className={"drop-down-custom"} id="dropdown-basic">
                Opcje
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown className="my-dropdown">
                    <p className={"normal-text drop-down-toggle-position"}>Kupowane</p>
                    <Dropdown.Toggle className={"drop-down-custom normal-text drop-down-toggle-position"}
                                     id="dropdown-basic">
                        Najczęściej
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            className={"normal-text to-left-item"}>Najczęściej</Dropdown.Item>
                        <Dropdown.Item
                            className={"normal-text to-left-item"}>Najrzadziej</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="my-dropdown">
                    <p className={"normal-text drop-down-toggle-position"}>Filtruj przez</p>
                    <Dropdown.Toggle className={"drop-down-custom normal-text drop-down-toggle-position"}
                                     id="dropdown-basic">
                        Ilość sztuk
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            className={"normal-text to-left-item"}>Ilość sztuk</Dropdown.Item>
                        <Dropdown.Item
                            className={"normal-text to-left-item"}>Libcza wyświetleń</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Dropdown.Menu>
        </>
    }

    return <Widget title={"Ranking ofert"} dropdown={OfferRankingDropdown()}>
        <>
            <div className={"main-element"}>
                <Image className={"widget-image"}/>
            </div>
            <p className={"chart-text widget-title-position"}>
                Produkt
            </p>
            <p className={"normal-text product-info"}>
                Liczba sprzedanych sztuk: 1000
                <br/>
                Obrót: 1000 PLN
            </p>
        </>
    </Widget>
}
export default OfferRankingWidget;
