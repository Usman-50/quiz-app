import React from 'react';
import { useReducer, useEffect } from 'react';
import { Trophy, Target, Zap, Crown, CheckCircle2, XCircle, RefreshCw, Clock } from 'lucide-react';
import LeftPanel from '../Component/LeftPanel';
import RightPanel from '../Component/RightPanel';
import questionBank from "../Component/questionBank";


const initialState = {
  currentIndex: 0,
  score: 0,
  selectedOption: null,
  isFinished: false,
  timeLeft: 15,
  points: 0,
  highScore: 0,
  hasStarted: false
}

const getInitialState = () => {
  const saved = Number(localStorage.getItem("highScore")) || 0
  return { ...initialState, highScore: saved }
}

const pointsPerQuestion = 10

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const isCorrect = action.payload === questionBank[state.currentIndex].correctOption
      return {
        ...state,
        selectedOption: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
        points: isCorrect ? state.points + pointsPerQuestion : state.points
      }
    }
    case "NEXT_QUESTION": {
      const isLast = state.currentIndex === questionBank.length - 1
      return isLast ? { ...state, isFinished: true, highScore: Math.max(state.highScore, state.points) } : { ...state, currentIndex: state.currentIndex + 1, selectedOption: null, timeLeft: 15 }
    }
    case "TICK": {
      return { ...state, timeLeft: state.timeLeft - 1 }
    }
    case "TIME_UP": {
      return { ...state, selectedOption: "" }
    }
    case "RESTART": {
      return { ...initialState, highScore: state.highScore }
    }
    case "START_QUIZ": {
      return { ...state, hasStarted: true }
    }
  }
}

export default function QuizDashboard() {
  const [state, dispatch] = useReducer(reducer, initialState, getInitialState)

  useEffect(() => {
    if (!state.hasStarted || state.isFinished || state.selectedOption !== null) {
      return
    }

    const id = setInterval(() => {
      dispatch({ type: "TICK" })
    }, 1000);

    return () => {
      clearInterval(id)
    }
  }, [state.hasStarted, state.currentIndex, state.selectedOption, state.isFinished])

  useEffect(() => {
    if (state.timeLeft === 0 && state.selectedOption === null) {
      dispatch({ type: "TIME_UP" })
    }
  }, [state.timeLeft, state.selectedOption])

  const currentQuestion = questionBank[state.currentIndex]

  const onSelect = (option) => {
    return dispatch({ type: "SELECT_ANSWER", payload: option })
  }

  const onRestart = () => {
    return dispatch({ type: "RESTART" })
  }

  const quizPercentage = ((state.currentIndex + 1) / questionBank.length * 100)

  useEffect(() => {
    localStorage.setItem("highScore", state.highScore)
  }, [state.highScore, state.hasStarted])

  return (
    <div className="min-h-screen bg-[#0B0C10] text-gray-100 font-sans flex items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-cyan-500/30">

      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[40%] w-[20vw] h-[20vw] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <LeftPanel text={currentQuestion.question} option={currentQuestion.option} current={state.currentIndex + 1} total={questionBank.length} timeLeft={state.timeLeft} selected={state.selectedOption} onSelect={onSelect} dispatch={dispatch} quizPercentage={quizPercentage} points={state.points} highScore={state.highScore} hasStarted={state.hasStarted} />
        <RightPanel option={currentQuestion.option} isFinished={state.isFinished} score={state.score} total={questionBank.length} onRestart={onRestart} />
      </div>
    </div>
  );
}