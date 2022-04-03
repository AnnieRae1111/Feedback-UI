import { useState } from 'react'
import Card from "./shared/Card";
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
  const[text, setText]=useState('')
  const[rating, setRating]=useState(10)
  const[btnDisabled, setBtnDisabled]=useState(true)
  const[message, setMessage]=useState('')

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setMessage('Text Must be at least 10 characters')
      setBtnDisabled(true)
    }else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  return ( 
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
       <RatingSelect />
        <div className="input-group">
          <input type="text" placeholder="write a review" onChange={handleTextChange} value={text}/>
          <Button type='submit' isDisabled={btnDisabled} version="primary">Send</Button>
        </div>

        { message && <div className="message">{message}</div>}
      </form>

    </Card>
   );
}
 
export default FeedbackForm;