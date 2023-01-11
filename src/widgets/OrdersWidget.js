import Widget from "../components/Widget";

let OrdersWidget = () => {
    return <Widget title={"Zamówienia"}>
        <>
            <p className={"big-text main-element"}>
                123
            </p>
            <p className={"normal-text widget-title-position"}>
                Niewysłane
            </p>
            <a href={"/"} className={"normal-text link-text widget-link"}>
                Przejdź do strony
            </a>
        </>
    </Widget>
};

export default OrdersWidget;
