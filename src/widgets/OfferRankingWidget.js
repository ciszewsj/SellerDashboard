import Widget from "../components/Widget";
import {Image} from "react-bootstrap-icons";
import {Dropdown} from "react-bootstrap";
import DropdownButton from "../components/DropdownButton";
import {useState} from "react";


let OfferRankingWidget = () => {
    let buyOptions = ["Najczęściej", "Najrzadziej"];
    let filterPositiveOptions = ["Ilość sztuk", "Obrót"];
    let filterNegativeOptions = ["Ilość sztuk", "Liczba wyświetleń"];

    let [buyOption, setBuyOption] = useState(buyOptions[0]);
    let [buyFilter, setFilterOption] = useState(filterPositiveOptions[0]);

    let setBuyOptions = (e) => {
        setBuyOption(buyOptions[e]);
        setFilterOptions(0);
    }

    let setFilterOptions = (e) => {
        setFilterOption((buyOptions[0] === buyOption ? filterPositiveOptions : filterNegativeOptions)[e]);
    }

    let offerList = [{
        name: "Odkurzacz",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        money: 100,
        numberOfElements: 100
    },
        {name: "Rakieta"}];


    let OfferRankingDropdown = () => {
        return <DropdownButton title={"Opcje"}>

            <p className={"normal-text drop-down-toggle-position"}>Kupowane</p>
            <DropdownButton title={buyOption} position={"drop-down-toggle-position"} action={setBuyOptions}>
                {buyOptions.map((lang, number) => {
                        return (<Dropdown.Item
                            className={"normal-text"} eventKey={number}
                            key={number}>{lang}</Dropdown.Item>)
                    }
                )}
            </DropdownButton>

            <p className={"normal-text drop-down-toggle-position"}>Filtruj przez</p>
            <DropdownButton title={buyFilter} position={"drop-down-toggle-position"} action={setFilterOptions}>
                {(buyOptions[0] === buyOption ? filterPositiveOptions : filterNegativeOptions).map((lang, number) => {
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
                <p className={"chart-text widget-title-position"}>
                    {name}
                </p>
                <p className={"normal-text product-info"}>
                    Liczba sprzedanych sztuk: {numberOfElements}
                    <br/>
                    Obrót: {money} PLN
                </p>
            </>
        )
    }

    return <Widget title={"Ranking ofert"} dropdown={OfferRankingDropdown()}>
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
