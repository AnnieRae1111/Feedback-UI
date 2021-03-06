import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  
  // const[feedback, setFeedback]=useState([{
  //   id:1, 
  //   text:'this item is from context',
  //   rating: 10

  // }])

  const[feedback, setFeedback]=useState(FeedbackData)


  const deleteFeedback = (id)=> {
    setFeedback(feedback.filter((item) => item.id !== id))
    }
  
  
    const addFeedback = (newFeedback)=> {
      newFeedback.id = uuidv4()
      //creating an id property for each entry 
      setFeedback([newFeedback,...feedback])
  
    }
    

  return <FeedbackContext.Provider value={{
    feedback,
    addFeedback, 
    deleteFeedback

  }}>
    {children}
  </FeedbackContext.Provider>
} 

export default FeedbackContext