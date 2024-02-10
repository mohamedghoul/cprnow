import { RxArrowLeft } from "react-icons/rx";
import { useState, useEffect } from "react";
import Question from "./Question";
import AssessmentResult from "./AssessmentResult";

function Assessment() {
    // Questions are hardcoded and stored here temporarily until a new storage solution is implemented
    // Question id 0 means that the assessment is over and the accompanying status code determines which component is displayed next
    const questions = [
        {
            id: 1,
            question: "Is there any immediate danger to you or others at the scene?",
            imageSrc: "/placeholder.png",
            hint: null,
            answers: [
                {
                    answer: "Yes",
                    nextQuestion: 0,
                    statusCode: 3
                },
                {
                    answer: "No",
                    nextQuestion: 2,
                    statusCode: null
                }
            ]
        },
        {
            id: 2,
            question: "Is the victim responsive?",
            imageSrc: "/placeholder.png",
            hint: "Try gently shaking the victim and asking if they are okay",
            answers: [
                {
                    answer: "Yes",
                    nextQuestion: 0,
                    statusCode: 2
                },
                {
                    answer: "No",
                    nextQuestion: 3,
                    statusCode: null
                }
            ]
        },
        {
            id: 3,
            question: "Is the victim breathing normally or at all?",
            imageSrc: "/placeholder.png",
            hint: "Look for the victim's chest to rise and fall",
            answers: [
                {
                    answer: "Yes",
                    nextQuestion: 0,
                    statusCode: 4
                },
                {
                    answer: "No",
                    nextQuestion: 1,
                    statusCode: 1
                }
            ]
        }
    ]

    const statusCodes = [
        {
            code: 1,
            description: "CPR is needed",
            message: null
        },
        {
            code: 2,
            description: "CPR is not needed, victim is breathing, and medical attention is needed. Exit the assessment",
            message: `
            The patient is breathing but is unresponsive.
            Call or have someone call emergency services immediately.
            `
        },
        {
            code: 3,
            description: "Immediate danger to you or others at the scene. Exit the assessment",
            message: `
            There is immediate danger to you or others at the scene.
            Move to a safe location and call emergency services immediately.
            If possible, reassess the situation from a safe distance.
            `
        },
        {
            code: 4,
            description: "CPR is not needed, victim is breathing, and no immediate danger is present. Exit the assessment",
            message: `
            The patient is breathing and there is no immediate danger to you or others at the scene, hence CPR is not needed.
            `
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [assessmentStatus, setAssessmentStatus] = useState(0);

    useEffect(() => {
        console.log("Answer was changed!")
        if (currentAnswer != null) {
            console.log("Answer is not null!")
            const statusCode = questions.find(question => question.id === currentQuestion).answers.find(answer => answer.answer === currentAnswer).statusCode;
            if (statusCode != null) {
                console.log("Answer is not null and Status code is not null! Redirect needed!")
                setAssessmentStatus(statusCode);
                console.log(statusCode);
            }
            else {
                setCurrentQuestion(questions.find(question => question.id === currentQuestion).answers.find(answer => answer.answer === currentAnswer).nextQuestion);
                setCurrentAnswer(null);
            }
        } else {
            console.log("Answer is null!")
        }
    }, [currentAnswer]);

    useEffect(() => {
        console.log("Assessment status was changed!")
    }, [assessmentStatus]);


    return (
        <div>
            <header className="bg-gray-800 h-[10vh] flex justify-center items-center">
                <RxArrowLeft className="text-white text-3xl m-2" />
                <h1 className="text-center">CPRnow Pre-Assessment</h1>
            </header>
            <main className="p-2">
                {assessmentStatus > 1 ? (
                    <AssessmentResult message={statusCodes.find(statusCode => statusCode.code === assessmentStatus).message} />
                ) : (
                    <Question {...questions.find(question => question.id === currentQuestion)} setCurrentAnswer={setCurrentAnswer} />
                )}
            </main>
        </div>
    );
}

export default Assessment;