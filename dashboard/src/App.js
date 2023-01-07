import './App.css';
import NavigationBar from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MyCustomCss.css';
import './css/Widget.css';
import {Col, Container, Row} from "react-bootstrap";
import Widget from "./components/Widget";
import OrdersWidget from "./components/OrdersWidget";

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
                        <Widget/>
                    </Col>
                    <Col className={"d-flex justify-content-center align-items-center"}>
                        <Widget/>
                    </Col>
                    <Col className={"d-flex justify-content-center align-items-center"}>
                        <Widget/>
                    </Col>
                    <Col className={"d-flex justify-content-center align-items-center"}>
                        <Widget/>
                    </Col>
                    <Col className={"d-flex justify-content-center align-items-center"}>
                        <Widget/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
