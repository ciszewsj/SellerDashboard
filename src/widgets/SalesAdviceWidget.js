import Widget from "../components/Widget";
import {InfoCircleFill} from "react-bootstrap-icons";

let SalesAdviceWidget = () => {
    return <Widget title={"Porady sprzedażowe"}>
        <div className={"main-element"}>
            <InfoCircleFill className={"widget-image info-circle"}/>
        </div>
        <p className={"normal-text normal-text widget-title-position widget-p"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore...
        </p>
    </Widget>
}
export default SalesAdviceWidget;
