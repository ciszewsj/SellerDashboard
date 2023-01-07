import {ChevronDoubleLeft, ChevronDoubleRight, CircleFill} from "react-bootstrap-icons";
import {Container} from "react-bootstrap";

let Widget = (props) => {

    let Circles = () => {
        return <div style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            color: "rgba(255,83,58,0.5)",
            bottom: "5px",
            left: "50%",
            transform: "translate(-50%, 0)"
        }}>
            <CircleFill/>
        </div>
    }

    return <div className={"widget-body"} style={{position: "relative"}}>
        <div style={{
            position: "absolute",
            width: "100%",
            height: "0px",
            marginTop: "35px",
            backgroundColor: "#000",
            opacity: "100%",
            border: "0.5px solid #000000"
        }}>
        </div>

        <div
            style={{
                position: "absolute",
                marginTop: "93px",
                marginLeft: "5px"
            }}
        >
            <ChevronDoubleLeft className={"chevron-double"}/>
        </div>

        <div
            style={{
                position: "absolute",
                marginTop: "93px",
                right: "5px"
            }}
        >
            <ChevronDoubleRight className={"chevron-double"}/>
        </div>

        <Circles/>

        <h1 className={"title-text"}
            style={{
                margin: "7px"
            }}
        >
            Tytuł
        </h1>
        <Container style={{
            width: "280px",
            height: "155px",
            position: "absolute",
            top: "40px",
            left: "50%",
            transform: "translate(-50%, 0)",
            backgroundColor:"rgba(0,0,0,0.25)"
        }}>
            {props.children}
        </Container>

    </div>

}
export default Widget;
