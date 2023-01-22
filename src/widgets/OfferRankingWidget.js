import Widget from "../components/Widget";
import {Image} from "react-bootstrap-icons";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";
import {useState} from "react";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";


let OfferRankingWidget = () => {
    const [settings] = useContext(SettingsContext);

    let buyOptions = [settings.lang.mostOften, settings.lang.leastOften];
    let filterPositiveOptions = [settings.lang.amount, settings.lang.transactions];
    let filterNegativeOptions = [settings.lang.amount, settings.lang.views];

    let [buyOption, setBuyOption] = useState("0");
    let [buyFilter, setFilterOption] = useState("0");

    let offerList = [{
        name: "Odkurzacz",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        money: 100,
        numberOfElements: 100
    },
        {name: "Rakieta"}];

    let OfferRankingDropdown = () => {
        return <DropdownButton title={settings.lang.options}>

            <p className={"normal-text drop-down-toggle-position"}>{settings.lang.bought}</p>
            <DropdownButton title={buyOptions[buyOption]} position={"drop-down-toggle-position"} action={setBuyOption}>
                {buyOptions.map((lang, number) => {
                        return (<Dropdown.Item
                            className={"normal-text"} eventKey={number}
                            key={number}>{lang}</Dropdown.Item>)
                    }
                )}
            </DropdownButton>

            <p className={"normal-text drop-down-toggle-position"}>{settings.lang.filterBy}</p>
            <DropdownButton
                title={(buyOption === (0).toString() ? filterPositiveOptions : filterNegativeOptions)[buyFilter]}
                position={"drop-down-toggle-position"}
                action={setFilterOption}>

                {(buyOption === (0).toString() ? filterPositiveOptions : filterNegativeOptions).map((lang, number) => {
                        return (<Dropdown.Item
                            className={"normal-text"} eventKey={number}
                            key={number}>{lang}</Dropdown.Item>)
                    }
                )}
            </DropdownButton>
        </DropdownButton>
    }

    let WidgetBody = ({name, numberOfElements, money, image}) => {
        return (
            <>
                <div className={"main-element"}>
                    {
                        image ?
                            <img className={"widget-image"} src={image} alt={"image of product"}/>
                            :
                            <Image className={"widget-image"}/>
                    }
                </div>
                <p className={"widget-title-position"}>
                    {name}
                </p>
                <p className={"normal-text product-info"}>
                    {settings.lang.amountText} {numberOfElements}
                    <br/>
                    {settings.lang.transactionsText} {money} {settings.lang.currency}
                </p>
            </>
        )
    }

    return <Widget title={settings.lang.offerRanking} dropdown={OfferRankingDropdown()}>
        {offerList.map((offer, number) => {
                return (
                    <WidgetBody name={offer.name} image={offer.image} money={offer.money}
                                numberOfElements={offer.numberOfElements}/>
                )
            }
        )}
    </Widget>
}
export default OfferRankingWidget;
