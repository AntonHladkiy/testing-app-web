import {HOST} from "../env";
import {useGetAll} from "./template/useGetAll";
import {useGetById} from "./template/useGetById";

export interface TaskInfo {
    _id: number;
    title: string;
    description: string;
    questions: number[];
}

export interface Question {
    question: string;
    answers: string[];
    answerIndex: number;
}

export interface TaskInfoWithQuestion {
    title: string;
    questions: Question[];
}

export const useGetTasks = () => {
    return useGetAll<TaskInfo[]>(`${HOST}tasks`);
};

export const useGetTaskWithQuestion = () => {
    return useGetById<TaskInfoWithQuestion>(`${HOST}tasks`);
};
