import Widget from "../components/Widget";
import {InfoCircleFill} from "react-bootstrap-icons";

let SalesAdviceWidget = () => {
    return <Widget title={"Porady sprzedażowe"}>
        <div style={{
            position: "absolute",
            left: "50%",
            top: "20px",
            transform: "translate(-50%, 0)",
            width: "80px",
            height: "80px"
        }}>
            <InfoCircleFill style={{
                width: "80px",
                height: "80px",
                color: "#FF8D76"
            }}/>
        </div>
        <p className={"normal-text"} style={{
            position: "absolute",
            left: "50%",
            width: "100%",
            height:"40px",
            transform: "translate(-50%, 0)",
            marginTop: "105px",
            overflow: "hidden"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore...
        </p>
    </Widget>
}
export default SalesAdviceWidget;
