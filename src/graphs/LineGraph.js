import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";

let LineGraph = ({data}) => {
    return (<LineChart width={250} height={100} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis width={35}/>
        <Line type="monotone" dataKey="pv" stroke="#7A1C18" isAnimationActive={false}/>
    </LineChart>)
}

export default LineGraph
