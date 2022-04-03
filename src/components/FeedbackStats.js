
const FeedbackStats = ({feedback}) => {
  //calculate ratings average 
  let average = feedback.reduce((acc, cur ) => {
    return acc + cur.rating
  }, 0) / feedback.length

  console.log(average)

  average = average.toFixed(1).replace(/[.,]0$/, "")
  //regex on the end: if its 0 replace with nothing / empty string
  //makes the average only 1 decimal place 

  return ( 
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;