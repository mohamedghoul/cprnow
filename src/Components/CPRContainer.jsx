import CPR from './CPR'; // Import the Welcome component
import { useState, useEffect, useRef } from 'react';
import { Button } from "./ui/button"
import { ArrowRight, Siren, Mic } from 'lucide-react';
import { useToast } from "./ui/use-toast"
import { motion, AnimatePresence } from 'framer-motion';

// Example decision tree structure
const CPRprocedures = [
  {
    id: 1,
    text: "Place hands on chest. Press down hard and fast.",
    options: [
      { text: "Yes", next: 2 },
      { text: "No", next: 3 },
    ],
  },
  {
    id: 2,
    text: "100-120 compressions per minute",
    options: [
      { text: "Frontend", next: 4 },
      { text: "Backend", next: 5 },
    ],
  },
  {
    id: 3,
    text: "Give Rescue Breaths: After 30 compressions, give 2 breaths",
    options: [
      { text: "Yes", next: null }, // Lead to a resource page or conclusion
      { text: "No", next: null }, // Lead to a different conclusion
    ],
  },
  {
    id: 3,
    text: "Seal Mouth and Nose: Cover mouth and nose fully for breaths",
    options: [
      { text: "Yes", next: null }, // Lead to a resource page or conclusion
      { text: "No", next: null }, // Lead to a different conclusion
    ],
  },
  {
    id: 3,
    text: "Continue 30 compressions and 2 breaths cycle",
    options: [
      { text: "Yes", next: null }, // Lead to a resource page or conclusion
      { text: "No", next: null }, // Lead to a different conclusion
    ],
  },
  
];

  function CPRContainer() {
    const { toast } = useToast();
    const [currentId, setCurrentId] = useState(0);
  
  
    function handleTransition() {
      if (currentId < CPRprocedures.length - 1) {
        setCurrentId(currentId + 1);
      } else {
        // Conclude CPR
        toast({
          title: "CPR cycle complete",
          description: "You've completed a full cycle of CPR.",
        });
        setCurrentId(0); // Reset or handle the conclusion of the quiz
      }
    }


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
              <CPR 
                title={CPRprocedures[currentId].text}
                cprId={currentId}
              />
          </div>
      <div className='w-full max-w-xs mx-auto mt-4'>
        <Button className="mx-auto text-2xl w-full p-8" onClick={() => handleTransition()} > Next<ArrowRight className="ml-2" /> </Button>
      </div>
      
    </motion.div>
    </AnimatePresence>

    <Button
        onClick={() => {
          toast({
            title: "You have successfully done a cycle",
            description: "Keep going!",
          })
        }}
      >
      Show Toast
    </Button>
  </>

    
  )
}

export default CPRContainer