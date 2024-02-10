import { useState } from "react";
import { Button } from "./ui/button";

function Question(props) {
    function handleSelectAnswer(answer) {
        props.setCurrentAnswer(answer);
    }

    return (
        <div className="">
            <img src={props.imageSrc} alt="CPRnow Question Image" className="w-1/2 mx-auto"/>
            <h2 className="text-center">{props.question}</h2>
            {props.hint && <p className="text-center">Hint: {props.hint}</p>}
            <div className="flex flex-col justify-center">
                {props.answers.map((answer, index) => {
                    return (
                        <Button key={answer.answer} className="text-white font-bold py-4 px-4 rounded mt-5" onClick={() => handleSelectAnswer(answer.answer)}>
                            {answer.answer}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default Question;
