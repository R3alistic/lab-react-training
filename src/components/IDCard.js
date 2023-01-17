function IDCard(props) {
    return (
        <div className="card">
            <div className="pic">
            <img src={props.picture} alt="pic"></img>
            </div>
            <ul style={{listStyleType:"none", width:"fit-content"}}>
            <li>
                <strong>First Name:</strong> {props.firstName}
            </li>
            <li>
            <strong>Last Name:</strong> {props.lastName}
            </li>
            <li>
            <strong>Gender:</strong>  {props.gender}
            </li>
            <li>
                <strong>Height:</strong> {props.height}
            </li>
            <li>
                <strong>Birth: </strong> {props.birth} 
            </li>
            </ul>
        </div>
    )
}

export default IDCard