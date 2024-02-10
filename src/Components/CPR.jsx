
import { AspectRatio } from "./ui/aspect-ratio"
import cpr1 from "./assets/cpr1.svg"
import {Lightbulb, LightbulbOff, Mic, ListRestart, AudioLines } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';

const UpAndDownAnimation = (props) => {
    return (
    <AspectRatio ratio={9/12} className="flex w-100   justify-center">

      <motion.div
        animate={{
          y: ["0%", "10%", "0%"], 
        }}
        transition={{
          duration: 0.6, 
          ease: "easeInOut",
          repeat: 45, 
          repeatType: "loop"
        }}
      >
        <img src={props.imageSrc} alt="Image" className="w-7/8 h-7/8 rounded-md"></img>
      </motion.div>
      </AspectRatio>

    );
  }


  const JustImage = (props) => {
    return (
    <AspectRatio ratio={9/9} className="flex w-100  justify-center">
        <img src={props.imageSrc} alt="Image" className="rounded-md "></img>
      </AspectRatio>

    );
  }

export default function CPR(props) {
    const controls = useAnimation();
    const [beepCount, setBeepCount] = useState(0);
    const [sirenon, setSirenon] = useState(true);

    const handleLightBulb = () => {
        setSirenon(prev=>!prev);
        if (controls) {
            controls.stop();
            console.log(controls);
        }
        
    }

    useEffect(() => {
        console.log(props.cprId);
        if ((props.cprId == 1 || props.cprId == 3) && beepCount < 30) {
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
                
                if (sirenon) {
                    controls.start({
                        opacity: [1, 0, 1],
                        transition: { duration: 0.1, times: [0, 0.5, 1] }
                    });
                }
                
                setBeepCount((prevCount) => prevCount + 1);

            };
            

            const soundTimeout = setTimeout(() => {
            // Play the beep sound every 600ms to get 100 beeps per minute
            const soundInterval = setInterval(playBeep, 630);

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
        animate={sirenon ? controls : {}}
    >
    
        <Card className = "border mx-auto w-4/5 ">
            
            <CardHeader>
                <CardTitle className='text-center '>{props.title}</CardTitle>
                
            </CardHeader>
            <CardContent className="grid gap-6 justify-self-center">
                {(props.cprId != 2 && props.cprId != 0 && props.cprId != 4) ? <UpAndDownAnimation imageSrc = {props.imageSrc}/> :  <JustImage imageSrc = {props.imageSrc}/>}
                
                
            </CardContent>
            <CardFooter className='w-full  mx-auto grid grid-cols-3'>
                <AudioLines size={40} strokeWidth={1.5} />
                {(props.cprId == 1 || props.cprId == 3) ? 
                <> {sirenon ? <Lightbulb size={40} strokeWidth={1.5} onClick={handleLightBulb}/> : <LightbulbOff size={40} strokeWidth={1.5} onClick={handleLightBulb}/>}
                <Mic size={40} strokeWidth={1.5} /></>
                :<></>}
            </CardFooter>
        </Card>
    </motion.div>
  )
}