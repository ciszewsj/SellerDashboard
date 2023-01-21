import Widget from "../components/Widget";
import {Label, Pie, PieChart, ResponsiveContainer} from "recharts";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";

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
        <div className={"main-element circle-chart"}>
            <ResponsiveContainer width="100%" height={90}>
                <PieChart>

                    <Pie data={data02} legendType={"none"} isAnimationActive={false} dataKey="value" nameKey="name"
                         cx="50%"
                         cy="50%" innerRadius={30} outerRadius={40} fill="#82ca9d">
                        <Label className={"chart-text"} value="4/5" position="center"/>


                    </Pie>

                </PieChart>
            </ResponsiveContainer>
        </div>
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
