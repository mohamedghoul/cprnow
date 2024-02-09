import { Button } from "./ui/button"
import { ArrowRight, Baby } from 'lucide-react';
import { Progress } from "./ui/progress"
import { AspectRatio } from "./ui/aspect-ratio"
import cpr1 from "./assets/cpr1.svg"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export default function CPR(props) {
  return (
    <div className="w-full h-screen justify-center align-middle ">
    

        <Card className = "border mx-auto w-4/5 ">
            
            <CardHeader>
                <CardTitle className='text-center '>{props.title}</CardTitle>
                
            </CardHeader>
            <CardContent className="grid gap-6 justify-self-center">
           
                <AspectRatio ratio={1/ 1} className="flex overflow-hidden border justify-center">
                    <img src={cpr1} alt="Image" className="rounded-md object-contain"></img>
                </AspectRatio>
     
                
            </CardContent>
            <CardFooter>
                <Button className="mx-auto text-2xl w-4/5 p-8"> Next   <ArrowRight className="ml-2" /> </Button>
            </CardFooter>
        </Card>
    </div>
  )
}