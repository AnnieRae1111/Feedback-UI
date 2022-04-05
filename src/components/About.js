import Card from "./shared/Card";
import { Link } from 'react-router-dom'

const About = () => {
  return ( 
    <Card>
    <div className="about">
     <h1>About this Project</h1>
     <p>This is React app to leave feedback for a product or service</p>
     <Link to='/'><p> Back to Home</p></Link>
    </div>
    </Card>
   );
}
 
export default About;