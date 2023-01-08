import Widget from "../components/Widget";

let OrdersWidget = () => {
    return <Widget title={"Zamówienia"}>
        <>
            <p className={"big-text"} style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                textAlign: "center",
                marginTop: "20px",
                overflow: "hidden"
            }}>
                123
            </p>
            <p className={"normal-text"} style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                marginTop: "105px",
            }}>
                Niewysłane
            </p>
            <a href={"/"} className={"normal-text link-text"} style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                bottom: "5px",
            }}>
                Przejdź do strony
            </a>
        </>
    </Widget>
};

export default OrdersWidget;
