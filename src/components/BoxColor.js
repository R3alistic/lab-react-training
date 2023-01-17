function BoxColor(props) {
    // const red = props.r;
    // const green = props.g;
    // const blue = props.b;
    // const color = (red,green,blue);
return (
    <div className="card" id="number" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
    <h1>rgb({props.r}, {props.g}, {props.b})</h1>
    </div>
)
} 
export default BoxColor