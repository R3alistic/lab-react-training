function CreditCard(props) {
    if (props.type === "Visa") {
        return (<div className="credit" style={{backgroundColor: `${props.bgColor}`, color:`${props.color}`}}>
            <img src="./assets/images/visa.png" alt="visa" id="card-image"></img>
            <br></br>
            <h1 className="cc-number">{props.number}</h1>
            <br></br>
            <h5 className="small-info">Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}</h5>
            <h5 className="cc-owner">{props.owner}</h5>
        </div>)
    } else if (props.type === "Master Card"){
        return (<div className="credit" style={{backgroundColor: `${props.bgColor}`, color:`${props.color}`}}>
            <img src="./assets/images/master-card.svg" alt="mastercard" id="card-image"></img>
            <br></br>
            <h1 className="cc-number">{props.number}</h1>
            <br></br>
            <h5 className="small-info">Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}
            </h5>
            <h5 className="cc-owner">{props.owner}</h5>
        </div>)
    } else {
        return (<div className="credit" style={{backgroundColor: `${props.bgColor}`, color:`${props.color}`}}>
            <img src="./assets/images/visa.png" alt="visa" id="card-image"></img>
            <h1 className="cc-number">{props.number}</h1>
            <h5 className="small-info">Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}
            </h5>
            <h5 className="cc-owner">{props.owner}</h5>
        </div>)
    }
}
export default CreditCard