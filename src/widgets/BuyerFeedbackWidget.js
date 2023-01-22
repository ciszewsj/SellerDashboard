import Widget from "../components/Widget";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";
import {useState} from "react";
import ChartElement from "../components/ChartElement";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";
import NavigationText from "../components/NavigationText";

let BuyerFeedbackWidget = () => {
    const [settings] = useContext(SettingsContext);

    let options = [settings.lang.all, settings.lang.positive, settings.lang.negative];
    const [option, setOption] = useState(0);


    const data02 = [
        {
            "name": "Group A",
            "value": 1,
            fill: "rgba(0,0,0,0)"
        },
        {
            "name": "Group F",
            "value": 4,
            fill: "#FF8D76"
        }
    ];

    let BuyerFeedbackDropdown = () => {
        return <DropdownButton title={options[option]} action={setOption}>
            {options.map((lang, number) => {
                    return (<Dropdown.Item
                        className={"normal-text"} eventKey={number}
                        key={number}>{lang}</Dropdown.Item>)
                }
            )}
        </DropdownButton>
    }

    let WidgetBody = ({data, comment}) => {
        return (
            <>
                <ChartElement data={data}/>
                <p className={"normal-text widget-title-position widget-p"}>
                    {comment}
                </p>
                <NavigationText/>
            </>
        )
    }

    return <Widget title={settings.lang.buyerFeedback} dropdown={BuyerFeedbackDropdown()}>
        <WidgetBody data={data02}
                    comment={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."}/>
        <WidgetBody data={data02}
                    comment={"Lorem ipsum dolor sit amet"}/>
        <WidgetBody data={data02}
                    comment={"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."}/>
        <WidgetBody data={data02}
                    comment={"Lorem labore..."}/>
        <WidgetBody data={data02}
                    comment={"labore..."}/>
    </Widget>
}
export default BuyerFeedbackWidget;
