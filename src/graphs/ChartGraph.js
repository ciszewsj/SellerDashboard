import {Label, Pie, PieChart, ResponsiveContainer} from "recharts";

let ChartGraph = ({data}) => {

    return (<div className={"circle-chart"}>
        <ResponsiveContainer width="100%" height={90}>
            <PieChart>

                <Pie data={data} legendType={"none"} isAnimationActive={false} dataKey="value"
                     nameKey="name"
                     cx="50%"
                     cy="50%" innerRadius={30} outerRadius={40} fill="#82ca9d">
                    <Label className={"chart-text"} value={`45/99`} position="center"/>
                </Pie>

            </PieChart>
        </ResponsiveContainer>
    </div>)
}

export default ChartGraph;
