import Widget from "../components/Widget";
import {Image} from "react-bootstrap-icons";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";

let OfferRankingWidget = () => {

    let OfferRankingDropdown = () => {
        return <DropdownButton title={"Opcje"}>

            <p className={"normal-text drop-down-toggle-position"}>Kupowane</p>
            <DropdownButton title={"Najczęsciej"} position={"drop-down-toggle-position"}>
                <Dropdown.Item
                    className={"normal-text to-left-item"}>Najczęściej</Dropdown.Item>
                <Dropdown.Item
                    className={"normal-text to-left-item"}>Najrzadziej</Dropdown.Item>
            </DropdownButton>

            <p className={"normal-text drop-down-toggle-position"}>Filtruj przez</p>
            <DropdownButton title={"Ilość sztuk"} position={"drop-down-toggle-position"}>
                <Dropdown.Item
                    className={"normal-text to-left-item"}>Ilość sztuk</Dropdown.Item>
                <Dropdown.Item
                    className={"normal-text to-left-item"}>Libcza wyświetleń</Dropdown.Item>
            </DropdownButton>

        </DropdownButton>
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
