
import { AspectRatio } from "./ui/aspect-ratio"
import cpr1 from "./assets/cpr1.svg"
import {Siren, Mic, ListRestart, AudioLines } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';



export default function CPR(props) {
    const controls = useAnimation();
    const [beepCount, setBeepCount] = useState(0);

    useEffect(() => {
        console.log(props.cprId);
        if (props.cprId == 2 && beepCount < 30) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            const playBeep = (duration = 200) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                gainNode.gain.value = 0.1; 
                oscillator.frequency.value = 520; 
                oscillator.type = 'sine'; // type of sound: sine, square, sawtooth, triangle

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration / 1000); 
                
                
                controls.start({
                    opacity: [1, 0, 1],
                    transition: { duration: 0.1, times: [0, 0.5, 1] }
                });
                setBeepCount((prevCount) => prevCount + 1);

            };

            const soundTimeout = setTimeout(() => {
            // Play the beep sound every 600ms to get 100 beeps per minute
            const soundInterval = setInterval(playBeep, 600);

            return () => clearInterval(soundInterval);
            }, 5000);

            return () => {
            clearTimeout(soundTimeout);
            audioContext.close(); 
            };
        }  
    }, []); 

  return (
    <motion.div
        className="w-full mx-auto h-100  justify-center align-middle"
        initial={{ opacity: 1 }}
        animate={controls}
    >
    
        <Card className = "border mx-auto w-4/5 ">
            
            <CardHeader>
                <CardTitle className='text-center '>{props.title}</CardTitle>
                
            </CardHeader>
            <CardContent className="grid gap-6 justify-self-center">
           
                <AspectRatio ratio={1/ 1} className="flex overflow-hidden border justify-center">
                    <img src={cpr1} alt="Image" className="rounded-md object-contain"></img>
                </AspectRatio>
     
                
            </CardContent>
            <CardFooter className='w-full justify-self-center mx-auto grid grid-cols-3'>
                <AudioLines size={40} strokeWidth={1.5} />
                <Siren size={40} strokeWidth={1.5} />
                <Mic size={40} strokeWidth={1.5} />
            </CardFooter>
        </Card>
    </motion.div>
  )
}