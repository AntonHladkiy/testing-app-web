import React, {ReactElement, useState} from 'react';
import {Question} from "../api/tasksApi";


interface ContextType {
    setQuestions: (questions: Question[]) => void;
    score: number;
    answerQuestion: (answerId: number) => void;
    currentQuestion: Question;
    reset: () => void;
}

export const CurrentTestContext = React.createContext({} as ContextType);

interface Props {
    children: React.ReactNode;
}

export const CurrentTestProvider = ({children}: Props): ReactElement => {
    const [question, setQuestions] = useState<Question[]>([]);
    const [score, setScore] = useState<number>(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const answerQuestion = (answerId: number) => {
        if (answerId == question[currentQuestionIndex].answerIndex) {
            setScore(score + 1)
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
    const reset = () => {
        setCurrentQuestionIndex(0)
        setScore(0)
    }
    return (
        <CurrentTestContext.Provider
            value={{
                setQuestions,
                score,
                answerQuestion,
                currentQuestion: question[currentQuestionIndex],
                reset
            }}>
            {children}
        </CurrentTestContext.Provider>
    );
};
