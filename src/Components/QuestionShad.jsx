import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {Card, CardContent, CardFooter, CardTitle, CardHeader, CardDescription } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {ArrowRight} from "lucide-react"
import { Progress } from "./ui/progress";

function Question(props) {
    function handleSelectAnswer(answer) {

    }

    return (
        <div className="w-full h-100 justify-center align-middle ">
        
            <Progress value={props.progress}  className="mx-auto w-4/5 p-y-3 md:w-1/2"/>

            <Card className = "border mx-auto w-4/5 border-transparent">
                
            <CardHeader>
                <CardTitle className='text-center text-2xl'>{props.question}</CardTitle>
                <CardDescription className="text-center text-xl">  {props.hint ? props.hint : <></> }</CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4 justify-self-center">
                { props.imageSrc ? <img src={props.imageSrc} alt="Image" className="rounded-md object-contain" /> : <></> }
                <RadioGroup defaultValue="card" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-1/2 md:mx-auto">
                    {props.answers.map((option) => (
                        <div key={option.value}>
                        <RadioGroupItem value={option.answer} id={option.answer} className="peer sr-only" />
                        <Label 
                            onClick={() => handleSelectAnswer(option.answer)}
                            className="flex flex-col items-center gap-3 text-2xl justify-between rounded-md border-2 bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                             {option.answer}
                        </Label>
                        </div>
                    ))}
                </RadioGroup>  
            </CardContent>
            </Card>
        </div>



    );
}

export default Question;
