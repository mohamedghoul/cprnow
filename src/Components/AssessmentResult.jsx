import { RxArrowLeft } from "react-icons/rx";
import { useState, useEffect } from "react";
import Question from "./Question";

function AssessmentResult(props) {
  return (
    <div className="flex justify-center items-center h-[80vh]">
        <h2 className="p-4">{props.message}</h2>
    </div>
  );
}

export default AssessmentResult;