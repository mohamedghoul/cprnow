import { RxArrowLeft } from "react-icons/rx";
import { useState, useEffect } from "react";
import { Label } from "./ui/label";


function AssessmentResult(props) {
  console.log(props.imageSrc)
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
        { props.imageSrc ? <img src={props.imageSrc} alt="Image" className="rounded-md object-contain" /> : <></> }

        <Label className="p-4 text-2xl text-center">{props.message}</Label>
    </div>
  );
}

export default AssessmentResult;