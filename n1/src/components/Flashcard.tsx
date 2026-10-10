import { useState } from 'react'

export function Flashcard({ question: q, answer: a }: { question: string; answer: string }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div
      onClick={() => setRevealed((v) => !v)}
      className="w-full max-w-sm my-4 p-2 border cursor-pointer"
    >
      <p className="m-0! font-semibold">{q}</p>

      {revealed ? (
        <p className="m-0! mt-2! pt-2 border-t border-dashed">{a}</p>
      ) : (
        <p className="m-0! mt-2! text-sm">Click to reveal</p>
      )}
    </div>
  )
}