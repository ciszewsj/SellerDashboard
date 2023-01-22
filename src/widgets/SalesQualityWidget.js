import Widget from "../components/Widget";
import {Pie, PieChart, ResponsiveContainer, Label} from "recharts";


let SalesQualityWidget = () => {


    const data02 = [
        {
            "name": "Group A",
            "value": 44,
            fill: "rgba(0,0,0,0)"
        },
        {
            "name": "Group F",
            "value": 45,
            fill: "#FF8D76"
        }
    ];


    let WidgetBody = () => {
        return (
            <>
                <div className={"main-element circle-chart"}>
                    <ResponsiveContainer width="100%" height={90}>
                        <PieChart>

                            <Pie data={data02} legendType={"none"} isAnimationActive={false} dataKey="value"
                                 nameKey="name"
                                 cx="50%"
                                 cy="50%" innerRadius={30} outerRadius={40} fill="#82ca9d">
                                <Label className={"chart-text"} value="45/99" position="center"/>
                            </Pie>

                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p className={"normal-text widget-title-position"}>
                    Ocena jakości
                </p>
                <a href={"/"} className={"normal-text link-text widget-link"}>
                    Przejdź do strony
                </a>
            </>)
    }

    return <Widget title={"Jakość sprzedaży"}>
        <WidgetBody/>

    </Widget>
}
export default SalesQualityWidget;
