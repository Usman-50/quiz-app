import React from 'react'

const QuizProgressBar = ({ current, total, quizPercentage }) => {
  return (
    <>
      <div className="w-full mb-12">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Question {current} / {total}</span>
          <span className="text-[10px] uppercase tracking-widest text-violet-400 font-medium">Quantum Phase</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
          <div style={{ width: `${quizPercentage}%` }} className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)] relative transition-all duration-300">
            <div className="absolute top-0 right-0 w-8 h-full bg-white/30 blur-sm"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizProgressBar
