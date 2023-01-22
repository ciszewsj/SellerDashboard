import ChartGraph from "../graphs/ChartGraph";

let ChartElement = ({title, className, get, max}) => {
    return (<div className={`main-element ${className}`}>
        <ChartGraph get={get} max={max}/>
        <p className={"normal-text margin-5px"}>
            {title}
        </p>
    </div>)
}

export default ChartElement;
