import Widget from "../components/Widget";
import {Image} from "react-bootstrap-icons";

let OfferRankingWidget = () => {

    return <Widget title={"Ranking ofert"}>
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
