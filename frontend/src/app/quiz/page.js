"use client"
import { getItems } from '@/components/QuestionsImport';
import { useState, useEffect } from 'react';
import {startGame} from '../../components/QuizLogic';
import './QuizStyles.scss';

const initial = [
    {question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    explanation: '',
    }
];

export default function Quiz() {
    const [questionList, setQuestionList] = useState(initial);
    useEffect(() => {
        getItems()
        .then(response => setQuestionList(JSON.parse(JSON.stringify(response))))
    }, [])
    const {question, answer1, answer2, answer3, answer4, explanation} = questionList[0];
    return (
        <div className="quiz-container">
            <div className="question-container">{question}</div>
            <div className="answer-buttons-container">
                <button className="answer-btn">{answer1}</button>
                <button className="answer-btn">{answer2}</button>
                <button className="answer-btn">{answer3}</button>
                <button className="answer-btn">{answer4}</button>
            </div>
            <div className="controls-container">
                <button className="start-btn btn hide" onClick={startGame}>Start</button>
                <button className="next-btn btn">Next</button>
            </div>
        </div>
    )
}