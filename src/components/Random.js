function Random(props) {
    const randomNumber = (Math.floor(Math.random() * (props.max - props.min + 1)) + props.min);
    if (randomNumber > 6) {
        return (
            <div className="card" id="number">
            <h1>Random value between 1 and 100: {randomNumber}</h1>
            </div>
            )
    } else {
        return (
            <div className="card" id="number">
            <h1>Random value between 1 and 6: {randomNumber}</h1>
            </div>
        )
    }
}

export default Random