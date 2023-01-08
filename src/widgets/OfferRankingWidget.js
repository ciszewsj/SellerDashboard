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
                    <p style={{margin: 0, marginLeft: "10px"}} className={"normal-text"}>Kupowane</p>
                    <Dropdown.Toggle className={"drop-down-custom normal-text"}
                                     style={{margin: 0, marginLeft: "10px"}}
                                     id="dropdown-basic">
                        Najczęściej
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{margin: 0}}
                                       className={"normal-text"}>Najczęściej</Dropdown.Item>
                        <Dropdown.Item style={{margin: 0}}
                                       className={"normal-text"}>Najrzadziej</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="my-dropdown">
                    <p style={{margin: 0, marginLeft: "10px"}} className={"normal-text"}>Filtruj przez</p>
                    <Dropdown.Toggle className={"drop-down-custom normal-text"}
                                     style={{margin: 0, marginLeft: "10px"}}
                                     id="dropdown-basic">
                        Ilość sztuk
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{margin: 0}}
                                       className={"normal-text"}>Ilość sztuk</Dropdown.Item>
                        <Dropdown.Item style={{margin: 0}}
                                       className={"normal-text"}>Libcza wyświetleń</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Dropdown.Menu>
        </>
    }

    return <Widget title={"Ranking ofert"} dropdown={OfferRankingDropdown()}>
        <>
            <div className={""} style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                textAlign: "center",
                marginTop: "20px",
                overflow: "hidden"
            }}>
                <Image style={{width: "80px", height: "80px"}}/>
            </div>
            <p className={"chart-text"} style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                marginTop: "105px",
            }}>
                Produkt
            </p>
            <p className={"normal-text"} style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                marginTop: "130px",
                display: "inline-block",
                overflow: "hidden",
                clear: "both",
                whiteSpace: "nowrap"
            }}>
                Liczba sprzedanych sztuk: 1000
            </p>
            <p className={"normal-text"} style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                marginTop: "145px",
                display: "inline-block",
                overflow: "hidden",
                clear: "both",
                whiteSpace: "nowrap"
            }}>
                Obrót: 1000 PLN
            </p>
        </>
    </Widget>
}
export default OfferRankingWidget;
