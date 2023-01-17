function Greetings(props) {
    if (props.lang === "de") {
        return (
            <div className="card" id="number">
                <h1>Hallo {props.children} </h1>
            </div>
            )
    } else {
        return (<div className="card" id="number">
            <h1>Bonjour {props.children}</h1>
        </div>
        )
    }
}

export default Greetings