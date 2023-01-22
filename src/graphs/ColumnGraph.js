import {Bar, BarChart, CartesianGrid, Line, XAxis, YAxis} from "recharts";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";

let ColumnGraph = ({data, previous}) => {

    const [settings] = useContext(SettingsContext);

    let color = `${settings.bgDark ? "#fff" : "#000"}`

    return (<BarChart width={250} height={100} data={data}
                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" stroke={color}/>
        <YAxis width={35} stroke={color}/>
        <Bar type="monotone" dataKey="pv" fill="#7A1C18" isAnimationActive={false}/>
        {previous && <Bar type="monotone" dataKey="lv" fill="#FF7058" isAnimationActive={false}/>}
    </BarChart>)
}

export default ColumnGraph
