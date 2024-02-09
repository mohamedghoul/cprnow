import Question from './Question'; // Import the Welcome component
import { Baby, Contact } from 'lucide-react';


function QuestionContainer() {
 

  return (
    <div className='flex items-center justify-center h-screen'>
      <Question 
        question="Question" 
        progress = "20"
        options = {[
            { value: 'Baby', Icon: Baby }, 
            { value: 'Adult',  Icon: Contact }, 
        ]}
      />
    </div>
  )
}

export default QuestionContainer