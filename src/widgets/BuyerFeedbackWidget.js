import Widget from "../components/Widget";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";
import {useState} from "react";
import ChartElement from "../components/ChartElement";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";
import NavigationText from "../components/NavigationText";

let BuyerFeedbackWidget = () => {
    const [settings] = useContext(SettingsContext);

    let options = [settings.lang.all, settings.lang.positive, settings.lang.negative];
    const [option, setOption] = useState("0");

    let link = "/buyer-feedback";
    let comments;

    if (Number(option) === 0) {
        comments = settings.data.feedback.all;
    } else if (Number(option) === 1) {
        comments = settings.data.feedback.best;
    } else {
        comments = settings.data.feedback.worst;
    }


    let BuyerFeedbackDropdown = () => {
        return <DropdownButton title={options[option]} action={setOption}>
            {options.map((lang, number) => {
                    return (<Dropdown.Item
                        className={"normal-text"} eventKey={number}
                        key={number}>{lang}</Dropdown.Item>)
                }
            )}
        </DropdownButton>
    }

    let WidgetBody = ({get, max, comment}) => {
        return (
            <>
                <ChartElement get={get} max={max}/>
                <p className={"normal-text widget-title-position widget-p"}>
                    {comment}
                </p>
                <NavigationText link={link}/>
            </>
        )
    }

    return <Widget title={settings.lang.buyerFeedback} dropdown={BuyerFeedbackDropdown()}>
        {
            comments.map((comment, number) => {
                return (
                    <WidgetBody get={comment.get} max={comment.max} comment={comment.comment} key={number}/>
                )
            })
        }
    </Widget>
}
export default BuyerFeedbackWidget;
