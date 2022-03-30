import Card from './shared/Card'

const FeedbackItem = ({item}) => {
 

  // const handleClick = () => {
  //  setRating((prev)=> {
  //    console.log(prev)
  //    return prev + 1
  //  })
  // }


  return ( 
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
   );
}
 
export default FeedbackItem;