import { Button } from "./ui/button"
import { ArrowRight, Baby } from 'lucide-react';
import { Progress } from "./ui/progress"

import {
  Card,
  CardContent,
  CardDescription,
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

export default function Question(props) {
  return (
    <div className="w-full h-100 justify-center align-middle ">
    
        <Progress value={props.progress}  className="mx-auto w-4/5 p-y-3 md:w-1/2"/>

        <Card className = "border mx-auto w-4/5 border-transparent">
            
        <CardHeader>
            <CardTitle className='text-center '>{props.question}</CardTitle>
            
        </CardHeader>
        <CardContent className="grid gap-4 justify-self-center">
            <RadioGroup defaultValue="card" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-1/2 md:mx-auto">
                {props.options.map((option) => (
                    <div key={option.value}>
                    <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                    <Label 
                        htmlFor={option.value}
                        className="flex flex-col items-center gap-3 text-2xl justify-between rounded-md border-2 bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                        <option.Icon /> {option.value}
                    </Label>
                    </div>
                ))}
            </RadioGroup>
            
        </CardContent>
        <CardFooter>
            <Button className="mx-auto md:w-1/2 text-2xl w-4/5 p-8"> Next   <ArrowRight className="ml-2" /> </Button>
        </CardFooter>
        </Card>
    </div>
  )
}