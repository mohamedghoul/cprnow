import CPR from './CPR'; // Import the Welcome component
import { useState, useEffect, useRef } from 'react';
import { Button } from "./ui/button"
import { ArrowRight, Siren, Mic, Home } from 'lucide-react';
import { useToast } from "./ui/use-toast"
import { motion, AnimatePresence } from 'framer-motion';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import {Card, CardContent, CardTitle, CardHeader, CardDescription } from "./ui/card";
import {Baby, Contact, School} from 'lucide-react'
import adult from './assets/adult.jpg'
import child from './assets/child.jpg'
import infant from './assets/Infant.jpg'
import cpr1 from './assets/Cpr1.jpg'
import cpr2 from './assets/Cpr2.jpg'
import rescuebreath from './assets/rescuebreath.jpg'
import gold from './assets/gold.avif'
import { Link } from "react-router-dom";


  function CPRContainer() {
    const { toast } = useToast();
    const [currentId, setCurrentId] = useState(0);
    const [age, setAge] = useState("none");
    console.log(currentId)

    const CPRprocedures = [
      {
        id: 0,
        text: "Place hands on chest. Press down hard and fast.",
        imageSrc: age == 'adult' ? adult : (age == 'infant' ? infant : child)
      },
      {
        id: 1,
        text: "Start 30 times: 100 compressions per minute",
        imageSrc: cpr2

      },
      {
        id: 2,
        text: "Give Rescue Breaths: Cover mouth and nose fully for breaths",
        imageSrc: rescuebreath

      },

      {
        id: 3,
        text: "Continue 30 compressions and 2 breaths cycle",
        imageSrc: cpr2

      },
      {
        id: 4,
        text: "Thank you for your patience",
        imageSrc: gold

      },
      
    ];
  
    function handleTransition() {
      if (age != 'none' && currentId < CPRprocedures.length - 1) {
        setCurrentId(currentId + 1);
      } 
    }

  const ages = [
    { category: 'infant', icon: <Baby/>}, 
    { category: 'children', icon: <School/>}, 
    { category: 'adult', icon: <Contact/> }]


  return (
    <>
    <AnimatePresence>
      <motion.div className='flex flex-col justify-center items-center h-screen '
            key={currentId}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x:0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}>
          <div
            className='w-full mx-auto '
          >
            {age == 'none' ? 
            <div className="w-full h-100 justify-center align-middle ">
        
            <Card className = "border mx-auto w-4/5 border-transparent">
                
            <CardHeader>
                <CardTitle className='text-center text-3xl'>Let's get started with CPR!</CardTitle>
                <CardDescription className="text-center text-xl"> Select the relevant:</CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4 justify-self-center">
                <RadioGroup defaultValue="card" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-1/2 md:mx-auto">
                    {ages.map((option) => (
                        <div key={option}>
                          <RadioGroupItem value={option.category}  className="peer sr-only hover:bg-green-700" />
                          <Label 
                              onClick={() => setAge(option.category)}
                              className="flex flex-col  items-center gap-3 text-2xl justify-between rounded-md border-2 bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            {option.icon}
                            {option.category}
                          </Label>
                        </div>
                    ))}
                </RadioGroup>
                
            </CardContent>
          
            </Card>
            </div>
            :
              <CPR 
                imageSrc = {CPRprocedures[currentId].imageSrc}
                title={CPRprocedures[currentId].text}
                cprId={currentId}
              />
            }

          </div>
      <div className='w-full max-w-xs mx-auto mt-4'>
        { currentId < CPRprocedures.length-1 ? 
        <Button className="mx-auto text-2xl w-full p-8" onClick={() => handleTransition()} > Next <ArrowRight className="ml-2" /> </Button>
          : 
        <Link to= "/"> <Button className="mx-auto text-2xl w-full p-8" onClick={() => handleTransition()} >  <Home className="ml-2" /> </Button></Link>

      }
      </div>
      
    </motion.div>
    </AnimatePresence>

  
  </>

    
  )
}

export default CPRContainer