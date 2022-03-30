import FeedbackItem from "./FeedbackItem";

const FeedBackList = ({feedback}) => {
  console.log(feedback)
  if(!feedback || feedback.length === 0){
    <p>Loading Feedback </p>
  }
  return ( 
    <div className="feedback-list">
      {feedback.map((item)=> (
        <FeedbackItem
        key={item.id}
        rating={item.rating}
        item={item}
        />
      ))}
      
    </div>
   );
}
 
export default FeedBackList;