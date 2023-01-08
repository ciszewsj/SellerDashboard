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


    return <Widget title={"Wykres sprzedaży"}>
        <p className={"normal-text"} style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            marginTop: "5px",
        }}>
            Obrót
        </p>
        <div style={{
            position: "absolute",
            left: "50%",
            top: "20px",
            transform: "translate(-50%, 0)",
            width: "250px",
            height: "100px"
        }}>
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

        <div style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            height:"25px",
            top: "135px",
            clear: "both",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap"

        }}>
            <div
                style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#7A1C18",
                    borderRadius: "5px",
                    float: "left",
                }}/>
            <p className={"normal-text"} style={{
                display: "inline-block",
                overflow: "hidden",
                clear: "both",
                whiteSpace: "nowrap",
                marginLeft:"5px",
                marginTop:"auto",
                marginBottom:"auto"
            }}>
                Ten tydzień
            </p>
        </div>
    </Widget>
}
export default SalesChartWidget;
