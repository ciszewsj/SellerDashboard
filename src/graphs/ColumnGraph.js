import {Bar, BarChart, CartesianGrid, Line, XAxis, YAxis} from "recharts";

let ColumnGraph = ({data}) => {
    return (<BarChart width={250} height={100} data={data}
                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis width={35}/>
        <Bar type="monotone" dataKey="pv" fill="#7A1C18" isAnimationActive={false}/>
        <Bar type="monotone" dataKey="lv" fill="#7A1C18" isAnimationActive={false}/>
    </BarChart>)
}

export default ColumnGraph
