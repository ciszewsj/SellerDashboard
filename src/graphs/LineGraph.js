import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";

let LineGraph = ({data, previous}) => {

    const [settings] = useContext(SettingsContext);

    let color = `${settings.bgDark ? "#fff" : "#000"}`
    return (<LineChart width={250} height={100} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" stroke={color}/>
        <YAxis width={35} stroke={color}/>
        <Line type="monotone" dataKey="pv" stroke="#7A1C18" isAnimationActive={false}/>
        {previous && <Line type="monotone" dataKey="lv" stroke="#FF7058" isAnimationActive={false}/>}
    </LineChart>)
}

export default LineGraph
