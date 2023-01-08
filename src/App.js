import './App.css';
import NavigationBar from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MyCustomCss.css';
import './css/Widget.css';
import {Col, Container, Row} from "react-bootstrap";
import Widget from "./components/Widget";
import OrdersWidget from "./widgets/OrdersWidget";
import SalesQualityWidet from "./widgets/SalesQualityWidet";
import SalesAdviceWidget from "./widgets/SalesAdviceWidget";
import OfferRankingWidget from "./widgets/OfferRankingWidget";
import BuyerFeedbackWidget from "./widgets/BuyerFeedbackWidget";
import SalesChartWidget from "./widgets/SalesChartWidget";

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <Container className={"container-xxl"}>
                <Row className={"justify-content-center row-cols-sm mx-auto align-items-center"}>
                    <Col className={"d-flex justify-content-center align-items-center"}>
                        <OrdersWidget/>
                    </Col>
                    <Col className={"d-flex justify-content-center align-items-center"}>
                        <SalesQualityWidet/>
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
        </div>
    );
}

export default App;
