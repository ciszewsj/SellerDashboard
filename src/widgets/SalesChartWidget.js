import Widget from "../components/Widget";
import {
    Line,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import {Dropdown} from "react-bootstrap";

let SalesChartWidget = () => {
    const data = [
        {
            "name": "1",
            "pv": 2400,
        },
        {
            "name": "2",
            "pv": 1398,
        },
        {
            "name": "3",
            "pv": 9800,
        },
        {
            "name": "4",
            "pv": 3908,
        },
        {
            "name": "5",
            "pv": 4800,
        },
        {
            "name": "6",
            "pv": 3800,
        },
        {
            "name": "7",
            "pv": 4300,
        }
    ]

    let SalesChartDropdown = () => {
        return <>
            <Dropdown.Toggle className={"drop-down-custom"} id="dropdown-basic">
                Opcje
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown className="my-dropdown">
                    <p className={"normal-text drop-down-toggle-position"}>Zakres czasu</p>
                    <Dropdown.Toggle className={"drop-down-custom normal-text drop-down-toggle-position"}
                                     id="dropdown-basic">
                        Dziś
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            className={"normal-text to-left-item"}>Dziś</Dropdown.Item>
                        <Dropdown.Item
                            className={"normal-text to-left-item"}>Obecny tydzień</Dropdown.Item>
                        <Dropdown.Item
                            className={"normal-text to-left-item"}>Poprzedni tydzień</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="my-dropdown">
                    <p className={"normal-text drop-down-toggle-position"}>Typ wykresu</p>
                    <Dropdown.Toggle className={"drop-down-custom normal-text drop-down-toggle-position"}
                                     id="dropdown-basic">
                        Liniowy
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            className={"normal-text to-left-item"}>Liniowy</Dropdown.Item>
                        <Dropdown.Item
                            className={"normal-text to-left-item"}>Słupkowy</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <p className={"normal-text drop-down-toggle-position"}>Poprzedni okres</p>
                <input type={"checkbox"}/>

            </Dropdown.Menu>
        </>
    }

    return <Widget title={"Wykres sprzedaży"} dropdown={SalesChartDropdown()}>
        <p className={"normal-text widget-title-over-position"}>
            Obrót
        </p>
        <div className={"chart-box"}>
            <ResponsiveContainer width="100%" height={100}>
                <LineChart width={250} height={100} data={data}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis width={35}/>
                    <Line type="monotone" dataKey="pv" stroke="#7A1C18" isAnimationActive={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>

        <div className={"legend-box"}>
            <div className={"color-box"}/>
            <p className={"normal-text legend-description"}>
                Ten tydzień
            </p>
        </div>
    </Widget>
}
export default SalesChartWidget;
