function Rating(props) {
    const {children} = props;
    const rating = Math.round(children);
    const starArray = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starArray.push(<span key={i}>★</span>);
      } else {
        starArray.push(<span key={i}>☆</span>);
      }
    }

    return (
      <div className="rating">
        {starArray}
      </div>
    );
  };

export default Rating