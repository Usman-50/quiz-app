import React from 'react'
import Score from './Score'
import RestartButton from './RestartButton'

const RightPanel = ({ isFinished = { isFinished }, score = { score }, total = { total }, onRestart = { onRestart } }) => {
  return (
    <>
      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="flex-1 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <Score isFinished={isFinished} score={score} total={total} />
        </div>
        <RestartButton onRestart={onRestart} />
      </div>
    </>
  )
}

export default RightPanel
