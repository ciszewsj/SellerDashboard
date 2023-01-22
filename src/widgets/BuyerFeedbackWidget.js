import Widget from "../components/Widget";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";
import {useState} from "react";
import ChartElement from "../components/ChartElement";

let BuyerFeedbackWidget = () => {

    let options = ["Wszystkie", "Pozytywne", "Negatywne"];
    const [option, setOption] = useState(options[0]);

    let onOptionChange = (e) => {
        setOption(options[e])
    }


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
        return <DropdownButton title={option} action={onOptionChange}>
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
                <a href={"/"} className={"normal-text link-text widget-link"}>
                    Przejdź do strony
                </a>
            </>
        )
    }

    return <Widget title={"Opinie kupujących"} dropdown={BuyerFeedbackDropdown()}>
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
