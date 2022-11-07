import React, {useContext, useEffect, useState} from 'react';
import {TaskInfoWithQuestion, useGetTaskWithQuestion} from "../api/tasksApi";
import {useNavigate, useParams} from "react-router";
import {CurrentTestContext} from "../providers/currentTestProvider";

export function Task() {
    const [task, setTask] = useState<TaskInfoWithQuestion>()
    let navigate = useNavigate();
    const [responseTask, setId] = useGetTaskWithQuestion();
    const {id} = useParams()
    const {setQuestions, score, currentQuestion, answerQuestion, reset} = useContext(CurrentTestContext)
    const [answerId, setAnswerId] = useState<number>(0)
    useEffect(() => {
        setId(id ? id : 0)
        reset()
    }, [])
    useEffect(() => {
        if (responseTask) {
            setTask(responseTask)
        }
    }, [responseTask])
    useEffect(() => {
        if (task) {
            setQuestions(task.questions)
        }
    }, [task])
    return <>
        {currentQuestion && (<>
            <div>
                {currentQuestion.question}
            </div>
            <div>
                {currentQuestion.answers.map((answer, index) => {
                    return <div>{answer}
                        <input type="radio"
                               name="answer"
                               value={index}
                               checked={answerId === index}
                               onChange={() => {
                                   setAnswerId(index)
                               }}/>
                    </div>
                })}
            </div>
            <button onClick={() => {
                answerQuestion(answerId)
                setAnswerId(0)
            }}>Answer
            </button>
        </>)}
        {!currentQuestion && (
            <>
                <div>Your score is {score + "/" + task?.questions.length}</div>
                <button onClick={() => {
                    navigate("/tasks")
                }}>Go back
                </button>
            </>
        )}
    </>

}
