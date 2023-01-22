import Widget from "../components/Widget";
import {
    Line,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer
} from "recharts";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";
import LineGraph from "../graphs/LineGraph";
import ColumnGraph from "../graphs/ColumnGraph";

let SalesChartWidget = () => {
    const data = [
        {
            "name": "pn",
            "pv": 2400,
        },
        {
            "name": "wt",
            "pv": 1398,
        },
        {
            "name": "śr",
            "pv": 9800,
        },
        {
            "name": "cz",
            "pv": 3908,
        },
        {
            "name": "pt",
            "pv": 4800,
        },
        {
            "name": "sb",
            "pv": 3800,
        },
        {
            "name": "nd",
            "pv": 4300,
        }
    ]

    let SalesChartDropdown = () => {
        return <DropdownButton title={"Opcje"}>
            <p className={"normal-text drop-down-toggle-position"}>Zakres czasu</p>
            <DropdownButton title={"Dziś"} position={"drop-down-toggle-position"}>
                <Dropdown.Item
                    className={"normal-text to-left-item"}>Dziś</Dropdown.Item>
                <Dropdown.Item
                    className={"normal-text to-left-item"}>Obecny tydzień</Dropdown.Item>
                <Dropdown.Item
                    className={"normal-text to-left-item"}>Poprzedni tydzień</Dropdown.Item>
            </DropdownButton>
            <p className={"normal-text drop-down-toggle-position"}>Typ wykresu</p>
            <DropdownButton title={"Liniowy"} position={"drop-down-toggle-position"}>
                <Dropdown.Item
                    className={"normal-text to-left-item"}>Liniowy</Dropdown.Item>
                <Dropdown.Item
                    className={"normal-text to-left-item"}>Słupkowy</Dropdown.Item>
            </DropdownButton>
            <p className={"normal-text drop-down-toggle-position"}>Poprzedni okres</p>
            <input type={"checkbox"}/>
        </DropdownButton>
    }

    let WidgetBody = ({type}) => {
        return (
            <>
                <p className={"normal-text widget-title-over-position"}>
                    Obrót
                </p>
                <div className={"chart-box"}>
                    <ResponsiveContainer width="100%" height={100}>
                        {type === 1 ?
                            <ColumnGraph data={data}/> :
                            <LineGraph data={data}/>
                        }
                    </ResponsiveContainer>
                </div>

                <div className={"legend-box"}>
                    <div className={"color-box"}/>
                    <p className={"normal-text legend-description"}>
                        Ten tydzień
                    </p>
                </div>
            </>
        )
    }

    return <Widget title={"Wykres sprzedaży"} dropdown={SalesChartDropdown()}>
        <WidgetBody type={0}/>
        <WidgetBody type={1}/>
    </Widget>
}
export default SalesChartWidget;
