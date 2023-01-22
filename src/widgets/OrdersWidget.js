import Widget from "../components/Widget";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";
import NavigationText from "../components/NavigationText";

let OrdersWidget = () => {
    const [settings] = useContext(SettingsContext);

    let WidgetBody = ({amount, type, link}) => {
        return (<>
            <p className={"big-text main-element"}>
                {amount}
            </p>
            <p className={"normal-text widget-title-position"}>
                {type}
            </p>
            <NavigationText/>
        </>)
    }

    return <Widget title={settings.lang.orders}>
        <WidgetBody amount={settings.data.orders.notSent} type={settings.lang.notSent}/>
        <WidgetBody amount={settings.data.orders.notPaid} type={settings.lang.notPaid}/>
        <WidgetBody amount={settings.data.orders.returns} type={settings.lang.returns}/>
    </Widget>
};

export default OrdersWidget;
