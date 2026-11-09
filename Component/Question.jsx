import React from 'react'

const Question = ({ text }) => {
  return (
    <>
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-medium leading-relaxed tracking-wide text-white/90">
          {text}
        </h2>
      </div>
    </>
  )
}

export default Question
