import Widget from "../components/Widget";
import ChartElement from "../components/ChartElement";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";
import NavigationText from "../components/NavigationText";


let SalesQualityWidget = () => {
    const [settings] = useContext(SettingsContext);

    let aspects = [settings.lang.aspects_1, settings.lang.aspects_2, settings.lang.aspects_3, settings.lang.aspects_4, settings.lang.aspects_5]
    let qualityMarks = [settings.lang.category_1, settings.lang.category_2, settings.lang.category_3, settings.lang.category_4, settings.lang.category_5]

    let datas = settings.data.qualitySales;


    let WidgetQualityMarkBody = () => {
        return (
            <>
                <ChartElement title={settings.lang.qualityMark} get={datas.mark.get} max={datas.mark.max}/>
                <NavigationText/>
            </>
        )
    }

    let WidgetQualityCategoryBody = () => {
        return (
            <>
                <div className={"main-element main-text-on-widget"}>
                    <p className={"chart-text d-inline"}>{qualityMarks[settings.data.qualitySales.mark.mark]}</p>
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
                {datas.worst[0] &&
                    <ChartElement title={aspects[datas.worst[0].type]} get={datas.worst[0].get} max={datas.worst[0].max}
                                  className={"left-graph-position"}/>}
                {datas.worst[1] &&
                    <ChartElement title={aspects[datas.worst[1].type]} get={datas.worst[1].get}
                                  max={datas.worst[1].max}/>}
                {datas.worst[2] &&
                    <ChartElement title={aspects[datas.worst[2].type]} get={datas.worst[2].get} max={datas.worst[2].max}
                                  className={"right-graph-position"}/>}
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
