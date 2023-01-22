import {Label, Pie, PieChart, ResponsiveContainer} from "recharts";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";

let ChartGraph = ({get, max}) => {
    const [settings] = useContext(SettingsContext);

    let data = [
        {
            "value": max - get,
            fill: "rgba(0,0,0,0)"
        },
        {
            "value": get,
            fill: "#FF8D76"
        }
    ];

    return (<div className={"circle-chart"}>
        <ResponsiveContainer width="100%" height={90}>
            <PieChart>

                <Pie data={data} legendType={"none"} isAnimationActive={false} dataKey="value"
                     nameKey="name"
                     cx="50%"
                     cy="50%" innerRadius={30} outerRadius={40}
                     stroke={`${settings.bgDark ? "rgba(255,255,255)" :
                         "rgba(0, 0, 0, 0.1)"}`}>
                    <Label className={`chart-text ${settings.bgDark && "chart-text-dark"}`} value={`${get}/${max}`}
                           position="center"/>
                </Pie>

            </PieChart>
        </ResponsiveContainer>
    </div>)
}

export default ChartGraph;
