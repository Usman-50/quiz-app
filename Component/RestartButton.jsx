import React from 'react'
import { RefreshCw } from 'lucide-react';

const RestartButton = ({ onRestart = { onRestart } }) => {
  return (
    <>
      <button onClick={() => onRestart() && console.log("you click restart")} className="group relative w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-white/[0.03] border border-cyan-500/30 hover:bg-cyan-950/30 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
        <RefreshCw className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          Initialize New Session
        </span>
      </button>
    </>
  )
}

export default RestartButton
