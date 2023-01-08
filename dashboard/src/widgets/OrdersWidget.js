import Widget from "../components/Widget";

let OrdersWidget = () => {
    return <Widget title={"Zamówienia"}>
        <>
            <div className={"big-text"} style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                textAlign: "center",
                marginTop: "25px",
                overflow: "hidden"
            }}>
                123
            </div>
            <div className={"normal-text"} style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 0)",
                marginTop: "110px",
            }}>
                Niewysłane
            </div>
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
