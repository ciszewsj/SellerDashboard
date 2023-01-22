import Widget from "../components/Widget";
import ChartElement from "../components/ChartElement";


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


    let WidgetQualityMarkBody = () => {
        return (
            <>
                <ChartElement title={"Ocena jakości"} data={data02}/>
                <a href={"/"} className={"normal-text link-text widget-link"}>
                    Przejdź do strony
                </a>
            </>
        )
    }

    let WidgetQualityCategoryBody = () => {
        return (
            <>
                <div className={"main-element main-text-on-widget"}>
                    <p className={"chart-text d-inline"}>Super sprzedawca</p>
                </div>
                <p className={"normal-text widget-title-position"}>
                    Kategoria jakości
                </p>
                <a href={"/"} className={"normal-text link-text widget-link"}>
                    Przejdź do strony
                </a>
            </>
        )
    }

    let WidgetQualityAspectsBody = () => {
        return (
            <>
                <p className={"normal-text widget-title-over-position"}>
                    Aspekty do poprawy
                </p>
                <ChartElement title={"aspekt1"} data={data02} className={"left-graph-position"}/>
                <ChartElement title={"aspekt2"} data={data02}/>
                <ChartElement title={"aspekt3"} data={data02} className={"right-graph-position"}/>


                <a href={"/"} className={"normal-text link-text widget-link"}>
                    Przejdź do strony
                </a>
            </>
        )
    }

    return <Widget title={"Jakość sprzedaży"}>
        <WidgetQualityMarkBody/>
        <WidgetQualityCategoryBody/>
        <WidgetQualityAspectsBody/>
    </Widget>
}
export default SalesQualityWidget;
