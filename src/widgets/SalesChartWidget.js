import Widget from "../components/Widget";
import {
    ResponsiveContainer
} from "recharts";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";
import LineGraph from "../graphs/LineGraph";
import ColumnGraph from "../graphs/ColumnGraph";
import {useContext, useState} from "react";
import {SettingsContext} from "../data/Settings";

let SalesChartWidget = () => {
    const [settings] = useContext(SettingsContext);

    let times = [settings.lang.today, settings.lang.thisWeek, settings.lang.lastWeek];
    let types = [settings.lang.lineGraph, settings.lang.columnGraph];
    let legend = [settings.lang.transactionsGraph, settings.lang.amountGraph]

    const [time, setTime] = useState("0");
    const [acType, setAcType] = useState("0");
    const [previous, setPrevious] = useState(false);

    let datas;

    if (Number(time) === 0) {
        datas = settings.data.chart.today;
    } else if (Number(time) === 1) {
        datas = settings.data.chart.week;
    } else {
        datas = settings.data.chart.lastWeek;
    }

    let SalesChartDropdown = () => {
        return <DropdownButton title={settings.lang.options}>
            <p className={"normal-text drop-down-toggle-position"}>{settings.lang.time}</p>
            <DropdownButton title={times[Number(time)]} position={"drop-down-toggle-position"} action={setTime}>
                {times.map((time, number) => {
                    return (
                        <Dropdown.Item
                            className={"normal-text to-left-item"} eventKey={number} key={number}>{time}</Dropdown.Item>
                    )
                })}

            </DropdownButton>
            <p className={"normal-text drop-down-toggle-position"}>{settings.lang.typeGraph}</p>
            <DropdownButton title={types[Number(acType)]} position={"drop-down-toggle-position"} action={setAcType}>
                {types.map((type, number) => {
                    return (
                        <Dropdown.Item
                            className={"normal-text to-left-item"} eventKey={number} key={number}>{type}</Dropdown.Item>
                    )
                })}
            </DropdownButton>
            <p className={"normal-text drop-down-toggle-position"}>{settings.lang.lastTime}</p>
            <input type={"checkbox"} onChange={e => setPrevious(e.target.checked)}/>
        </DropdownButton>
    }

    let WidgetBody = ({type, data}) => {
        return (
            <>
                <p className={"normal-text widget-title-over-position"}>
                    {legend[Number(type)]}
                </p>
                <div className={"chart-box"}>
                    <ResponsiveContainer width="100%" height={100}>
                        {acType === (1).toString() ?
                            <ColumnGraph data={data} previous={previous}/> :
                            <LineGraph data={data} previous={previous}/>
                        }
                    </ResponsiveContainer>
                </div>

                <div className={"legend-box"}>

                    <div className={"over-legend"}>
                        <div className={"legend-text"}>
                            <span className={"color-box"}/>
                            <p className={"normal-text legend-description"}>
                                {times[Number(time)]}
                            </p>
                        </div>
                        {previous &&
                            <div className={"legend-text"}>
                                <span className={"color-box color-box-previous"}/>
                                <p className={"normal-text legend-description"}>
                                    {settings.lang.previousPeriod}
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </>
        )
    }

    return <Widget title={settings.lang.salesChart} dropdown={SalesChartDropdown()}>
        {datas.sold.length &&
            <WidgetBody type={0} data={datas.sold}/>}
        {datas.transactions.length &&
            <WidgetBody type={1} data={datas.transactions}/>
        }
    </Widget>
}
export default SalesChartWidget;
