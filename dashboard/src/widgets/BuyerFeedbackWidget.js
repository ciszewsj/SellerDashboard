import Widget from "../components/Widget";
import {Label, Pie, PieChart, ResponsiveContainer} from "recharts";

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
            "fill": "#FF8D76"
        }
    ];
    return <Widget title={"Opinie kupujących"} dropdown={"123"}>
        <div style={{
            position: "absolute",
            left: "50%",
            top: "20px",
            transform: "translate(-50%, 0)",
            width: "90px",
            height: "80px"
        }}>
            <ResponsiveContainer width="100%" height={90}>
                <PieChart>

                    <Pie data={data02} legendType={"none"} isAnimationActive={false} dataKey="value" nameKey="name"
                         cx="50%"
                         cy="50%" innerRadius={30} outerRadius={40} fill="#82ca9d">
                        <Label className={"chart-text"} value="4/5" position="center" style={{fill: "#000"}}/>


                    </Pie>

                </PieChart>
            </ResponsiveContainer>
        </div>
        <p className={"normal-text"} style={{
            position: "absolute",
            left: "50%",
            width: "100%",
            height:"40px",
            transform: "translate(-50%, 0)",
            marginTop: "105px",
            overflow: "hidden"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore...
        </p>
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
export default BuyerFeedbackWidget;
