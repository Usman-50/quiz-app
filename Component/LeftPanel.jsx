import React from 'react'
import QuizHeader from './QuizHeader';
import QuizProgressBar from './QuizProgressBar';
import Question from './Question';
import Multiple from './Multiple';

const LeftPanel = ({ text, option, current, total, timeLeft, selected, onSelect, dispatch, quizPercentage, points, highScore = { highScore }, hasStarted = { hasStarted } }) => {
    return (
        <>
            <div className="lg:col-span-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden group">
                <QuizHeader timeLeft={timeLeft} quizPercentage={quizPercentage} points={points} highScore={highScore} />
                <QuizProgressBar current={current} total={total} quizPercentage={quizPercentage} />
                <Question text={text} />
                <Multiple option={option} selected={selected} onSelect={onSelect} dispatch={dispatch} current={current} hasStarted={hasStarted} />
            </div>
        </>
    )
}

export default LeftPanel
