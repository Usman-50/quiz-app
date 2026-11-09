import React from 'react'
import { Trophy, Target, Zap } from 'lucide-react';

const Score = ({ isFinished = { isFinished }, score = { score }, total = { length } }) => {

  const scorePercentage = Math.round((score / total) * 100)

  let badgeContent = null

  if (scorePercentage <= 50) {
    badgeContent = <span className="text-sm font-medium text-amber-100">Normal Rank</span>
  }
  else if (scorePercentage > 50 && scorePercentage <= 60) {
    badgeContent = <span className="text-sm font-medium text-amber-100">Master Rank</span>
  }
  else if (scorePercentage > 60 && scorePercentage <= 70) {
    badgeContent = <span className="text-sm font-medium text-amber-100">Specialist Rank</span>
  }
  else if (scorePercentage > 70 && scorePercentage <= 80) {
    badgeContent = <span className="text-sm font-medium text-amber-100">Scholor rank</span>
  }
  else if (scorePercentage > 80 && scorePercentage <= 90) {
    badgeContent = <span className="text-sm font-medium text-amber-100">Genius Rank</span>
  }
  else if (scorePercentage > 90 && scorePercentage <= 100) {
    badgeContent = <span className="text-sm font-medium text-amber-100">GrandMaster Rank</span>
  }
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px]"></div>

      <div className="relative mb-8 p-6 bg-gradient-to-b from-white/5 to-transparent rounded-full border border-white/5">
        <Trophy className="w-16 h-16 text-amber-300 drop-shadow-[0_0_15px_rgba(252,211,77,0.5)] stroke-[1.5]" />
        <div className="absolute -top-2 -right-2">
          <Zap className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] fill-cyan-400/20" />
        </div>
      </div>

      <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">Performance Module</h3>
      <div className="flex items-baseline justify-center gap-2 mb-8">
        <span className="text-6xl font-light tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">{score}</span>
        <span className="text-3xl font-light text-gray-600">/</span>
        <span className="text-2xl font-medium text-gray-500">{total}</span>
      </div>
      <div className="w-full relative mt-4">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 rounded-xl blur opacity-30"></div>
        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-xl p-4 flex items-center justify-between overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-yellow-500/10 to-transparent pointer-events-none"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-yellow-600 flex items-center justify-center shadow-[0_0_15px_rgba(252,211,77,0.4)]">
              <Target className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[9px] uppercase tracking-[0.15em] text-amber-200/70 font-semibold">Personal Best</span>
              <span className="text-sm font-medium text-amber-100">{badgeContent}</span>
            </div>
          </div>
          <div className="text-lg font-bold text-amber-400 tracking-wide">
            {scorePercentage}%
          </div>
        </div>
      </div>
    </>
  )
}

export default Score
