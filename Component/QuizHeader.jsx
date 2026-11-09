import React from 'react'
import { Crown } from 'lucide-react';

const QuizHeader = ({ timeLeft, points, highScore = { highScore } }) => {
  const totalTime = 15

  const totalCircumference = 283

  const strokeDashoffset = totalCircumference - (totalCircumference * timeLeft) / totalTime
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Current Score</span>
            <div className="flex items-baseline gap-1 text-3xl font-light tracking-wide text-white">
              {points} <span className="text-sm text-cyan-400 font-medium tracking-normal">PTS</span>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1 flex items-center gap-1">
              <Crown className="w-3 h-3 text-amber-400" /> High Score
            </span>
            <div className="flex items-baseline gap-1 text-xl font-light text-white/70">
              {highScore}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white/5 pr-6 rounded-full border border-white/5 shadow-inner">
          <div className="relative flex items-center justify-center w-14 h-14">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" className="stroke-white/10" strokeWidth="6" fill="none" />
              <circle cx="50" cy="50" r="45" className="stroke-cyan-400" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray={totalCircumference} strokeDashoffset={strokeDashoffset} />
            </svg>
            <span className="absolute text-lg font-bold text-cyan-300 tabular-nums">{timeLeft}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.2em] text-cyan-500 font-semibold">Time Left</span>
            <span className="text-xs text-gray-400">Seconds</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizHeader
