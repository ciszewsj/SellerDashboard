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

    let offers;

    if (Number(buyOption) === 0) {
        if (Number(buyFilter) === 0) {
            offers = settings.data.offers.best.amount;
        } else if (Number(buyFilter) === 1) {
            offers = settings.data.offers.best.transactions;
        }
    } else if (Number(buyOption) === 1) {
        if (Number(buyFilter) === 0) {
            offers = settings.data.offers.worst.amount;
        } else if (Number(buyFilter) === 1) {
            offers = settings.data.offers.worst.views;
        }
    }


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

    let WidgetBody = ({best, name, numberOfElements, money, image, views}) => {
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
                    {Number(best) === 0 ? `${settings.lang.transactionsText} ${money} ${settings.lang.currency}`
                        :
                        `${settings.lang.viewsText} ${views}`
                    }
                </p>
            </>
        )
    }
    console.log(offers)
    return <Widget title={settings.lang.offerRanking} dropdown={OfferRankingDropdown()}>
        {offers.map((offer, number) => {
                return (
                    <WidgetBody best={buyOption} name={offer.name} image={offer.image} money={offer.transactions}
                                key={number} views={offer.views}
                                numberOfElements={offer.amount}/>
                )
            }
        )}
    </Widget>
}
export default OfferRankingWidget;
