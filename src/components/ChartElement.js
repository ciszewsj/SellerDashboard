import ChartGraph from "../graphs/ChartGraph";

let ChartElement = ({data, title, className}) => {
    return (<div className={`main-element ${className}`}>
        <ChartGraph data={data}/>
        <p className={"normal-text margin-5px"}>
            {title}
        </p>
    </div>)
}

export default ChartElement;
