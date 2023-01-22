import Widget from "../components/Widget";
import ChartGraph from "../graphs/ChartGraph";


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
                <div className={"main-element"}>
                    <ChartGraph data={data02}/>
                </div>
                <p className={"normal-text widget-title-position"}>
                    Ocena jakości
                </p>
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

                <div className={"main-element"} style={{left: "45px"}}>
                    <ChartGraph data={data02}/>
                    <p className={"normal-text"} style={{marginTop:"5px"}}>
                        aspekt1
                    </p>
                </div>


                <div className={"main-element"}>
                    <ChartGraph data={data02}/>
                    <p className={"normal-text"} style={{marginTop:"5px"}}>
                        aspekt2
                    </p>
                </div>

                <div className={"main-element"} style={{right: "-45px", left: "auto"}}>
                    <ChartGraph data={data02}/>
                    <p className={"normal-text"} style={{marginTop:"5px"}}>
                        aspekt3
                    </p>
                </div>


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
