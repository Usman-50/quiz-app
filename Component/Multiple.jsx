import React, { useState } from 'react'
import { CheckCircle2 } from 'lucide-react';
import questionBank from './questionBank';

const Multiple = ({ option, selected, onSelect, dispatch, current, hasStarted }) => {

  return (
    <>
      <div className="space-y-4 flex-1">
        {option.map((item) => {
          return <div key={item} onClick={() => hasStarted && selected === null && onSelect(item)} className={`${selected !== null || hasStarted ? "disabled" : ""} group/opt flex items-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 cursor-pointer`}>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm font-medium text-gray-400 mr-5 group-hover/opt:border-white/40 group-hover/opt:text-white transition-colors">A</div>
            <span className={`${item === selected ? "text-green-800" : ""} text-lg text-gray-300  transition-colors`}>{item}</span>
          </div>
        })}
        {selected !== null && (
          <button onClick={() => dispatch({ type: "NEXT_QUESTION" })} className='px-4 py-2 bg-blue-800 rounded cursor-pointer'>{questionBank.length === current ? "Finish" : "Next"}</button>
        )
        }
        {!hasStarted && (
          <button onClick={() => dispatch({ type: "START_QUIZ" })} className='px-4 py-2 bg-blue-800 rounded cursor-pointer'>Start Quiz</button>
        )
        }
      </div>
    </>
  )
}

export default Multiple
