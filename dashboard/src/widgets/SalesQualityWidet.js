import Widget from "../components/Widget";
import {Pie, PieChart, ResponsiveContainer, Label} from "recharts";


let SalesQualityWidget = () => {
    const data02 = [
        {
            "name": "Group A",
            "value": 2400,
            fill: "rgba(0,0,0,0)"
        },
        {
            "name": "Group F",
            "value": 4800,
            "fill": "#FF8D76"
        }
    ];
    return <Widget title={"Jakość sprzedaży"}>
        <div style={{
            position: "absolute",
            left: "50%",
            top:"25px",
            transform: "translate(-50%, 0)",
            width: "90px",
            height: "80px"
        }}>
            <ResponsiveContainer width="100%" height={90}>
                <PieChart>

                    <Pie data={data02} legendType={"none"} isAnimationActive={false} dataKey="value" nameKey="name"
                         cx="50%"
                         cy="50%" innerRadius={30} outerRadius={40} fill="#82ca9d">
                        <Label className={"chart-text"} value="99/99" position="center"/>


                    </Pie>

                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className={"normal-text"} style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            marginTop: "110px",
        }}>
            Ocena jakości
        </div>
        <a href={"/"} className={"normal-text link-text"} style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            bottom: "5px",
        }}>
            Przejdź do strony
        </a>
    </Widget>
}
export default SalesQualityWidget;
