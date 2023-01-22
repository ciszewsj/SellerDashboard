import Widget from "../components/Widget";

let OrdersWidget = () => {

    let WidgetBody = ({amount, type, link}) => {
        return (<>
            <p className={"big-text main-element"}>
                {amount}
            </p>
            <p className={"normal-text widget-title-position"}>
                {type}
            </p>
            <a href={link ? link : "/"} className={"normal-text link-text widget-link"}>
                Przejdź do strony
            </a>
        </>)
    }

    return <Widget title={"Zamówienia"}>
        <WidgetBody amount={"143"} type={"Niewysłane"}/>
        <WidgetBody amount={"111"} type={"Wysłane"}/>
        <WidgetBody amount={"100"} type={"Zwroty"}/>
    </Widget>
};

export default OrdersWidget;
