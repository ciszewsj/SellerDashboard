import Widget from "../components/Widget";
import {InfoCircleFill} from "react-bootstrap-icons";

let SalesAdviceWidget = () => {


    let WidgetBody = ({comment}) => {
        return (<>
            <div className={"main-element"}>
                <InfoCircleFill className={"widget-image info-circle"}/>
            </div>
            <p className={"normal-text normal-text widget-title-position widget-p"}>
                {comment}

            </p>
        </>)
    }

    return <Widget title={"Porady sprzedażowe"}>
        <WidgetBody
            comment={"Im większe ryzyko, tym większa korzyść. Nie ma ryzyka, nie ma zabawy"}/>
        <WidgetBody
            comment={"Zawsze dawaj zniżkę osobom, które lubią się targować."}/>
        <WidgetBody
            comment={"Jeżeli będziesz umiał wywołać u ludzi śmiech, to znaczy że jesteś w formie!"}/>
    </Widget>
}
export default SalesAdviceWidget;
