import {Col, Container, Row} from "react-bootstrap";
import OrdersWidget from "../widgets/OrdersWidget";
import SalesQualityWidget from "../widgets/SalesQualityWidget";
import BuyerFeedbackWidget from "../widgets/BuyerFeedbackWidget";
import OfferRankingWidget from "../widgets/OfferRankingWidget";
import SalesChartWidget from "../widgets/SalesChartWidget";
import SalesAdviceWidget from "../widgets/SalesAdviceWidget";
import DataLoader from "../components/DataLoader";
import {useContext} from "react";
import {SettingsContext} from "../data/Settings";
import {Navigate} from "react-router-dom";

let SellerDashboardSite = () => {
    const [settings] = useContext(SettingsContext);


    return (
        <Container className={"container-xxl"}>
            {!settings.auth && <Navigate to={"/login"}/>}
            <DataLoader/>

            <Row className={"justify-content-center row-cols-sm mx-auto align-items-center"}>
                <Col className={"d-flex justify-content-center align-items-center"}>
                    <OrdersWidget/>
                </Col>
                <Col className={"d-flex justify-content-center align-items-center"}>
                    <SalesQualityWidget/>
                </Col>
                <Col className={"d-flex justify-content-center align-items-center"}>
                    <BuyerFeedbackWidget/>
                </Col>
                <Col className={"d-flex justify-content-center align-items-center"}>
                    <OfferRankingWidget/>
                </Col>
                <Col className={"d-flex justify-content-center align-items-center"}>
                    <SalesChartWidget/>
                </Col>
                <Col className={"d-flex justify-content-center align-items-center"}>
                    <SalesAdviceWidget/>
                </Col>
            </Row>
        </Container>
    )
}

export default SellerDashboardSite;
