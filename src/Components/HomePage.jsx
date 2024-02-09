import { Button } from "./ui/button"
import { Label } from "./ui/label"

export default function HomePage() {
  return (
    <>
     <div className="flex ">
        <Label></Label>
        <Button>Do CPR now</Button>
        <Button>CPR Training</Button>
     </div>
    </>
  )
}