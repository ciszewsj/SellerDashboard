import Widget from "../components/Widget";
import {Label, Pie, PieChart, ResponsiveContainer} from "recharts";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";
import ChartGraph from "../graphs/ChartGraph";

let BuyerFeedbackWidget = () => {
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
        return <DropdownButton title={"Wszystkie"}>
            <Dropdown.Item className={"normal-text"}>Wszystkie</Dropdown.Item>
            <Dropdown.Item className={"normal-text"}>Pozytywne</Dropdown.Item>
            <Dropdown.Item className={"normal-text"}>Negatywne</Dropdown.Item>
        </DropdownButton>
    }

    return <Widget title={"Opinie kupujących"} dropdown={BuyerFeedbackDropdown()}>
        <ChartGraph data={data02}/>
        <p className={"normal-text widget-title-position widget-p"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore...
        </p>
        <a href={"/"} className={"normal-text link-text widget-link"}>
            Przejdź do strony
        </a>
    </Widget>
}
export default BuyerFeedbackWidget;
