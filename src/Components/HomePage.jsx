import { Button } from "./ui/button"
import { Label } from "./ui/label"
import {Link} from 'react-router-dom'
import CPRContainer from "./CPRContainer"

export default function HomePage() {
  return (
    <>
     <div className="flex ">
        <Label></Label>
       
            <Link to="assessment" className="hover:text-blue-200 transition duration-150 ease-in-out"> 
              <Button>Do CPR now
              </Button>
            </Link>
          
        <Button>
          
          CPR Training
          </Button>
     </div>
    </>
  )
}