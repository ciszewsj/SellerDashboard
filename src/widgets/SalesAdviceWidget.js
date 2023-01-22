import Widget from "../components/Widget";
import {InfoCircleFill} from "react-bootstrap-icons";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";

let SalesAdviceWidget = () => {
    const [settings] = useContext(SettingsContext);

    let advices = [settings.lang.advice_1, settings.lang.advice_2, settings.lang.advice_3]

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

    return <Widget title={settings.lang.salesAdvice}>
        {advices.map((advice, number) => {
            return (
                <WidgetBody comment={advice} key={number}/>
            )
        })}

    </Widget>
}
export default SalesAdviceWidget;
