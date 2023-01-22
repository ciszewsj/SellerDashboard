import Widget from "../components/Widget";
import ChartElement from "../components/ChartElement";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";
import NavigationText from "../components/NavigationText";


let SalesQualityWidget = () => {
    const [settings] = useContext(SettingsContext);


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


    let WidgetQualityMarkBody = () => {
        return (
            <>
                <ChartElement title={settings.lang.qualityMark} data={data02}/>
                <NavigationText/>
            </>
        )
    }

    let WidgetQualityCategoryBody = () => {
        return (
            <>
                <div className={"main-element main-text-on-widget"}>
                    <p className={"chart-text d-inline"}>{settings.lang.category_4}</p>
                </div>
                <p className={"normal-text widget-title-position"}>
                    {settings.lang.qualityCategory}
                </p>
                <NavigationText/>
            </>
        )
    }

    let WidgetQualityAspectsBody = () => {
        return (
            <>
                <p className={"normal-text widget-title-over-position"}>
                    {settings.lang.aspectsToBeImproved}
                </p>
                <ChartElement title={"aspekt1"} data={data02} className={"left-graph-position"}/>
                <ChartElement title={"aspekt2"} data={data02}/>
                <ChartElement title={"aspekt3"} data={data02} className={"right-graph-position"}/>


                <NavigationText/>
            </>
        )
    }

    return <Widget title={settings.lang.salesQuality}>
        <WidgetQualityMarkBody/>
        <WidgetQualityCategoryBody/>
        <WidgetQualityAspectsBody/>
    </Widget>
}
export default SalesQualityWidget;
