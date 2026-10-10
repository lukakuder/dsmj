export function QA({ question: q, answer: a }: { question: string; answer: string }) {
  return (
    <div className="border w-fit gap-2 my-4">
        <div className="flex gap-3 p-2">
            <b className="flex size-7 items-center justify-center text-white bg-blue-500 text-sm">Q</b>
            <p className="m-0!">{q}</p>
        </div>

        <div className="flex gap-3 p-2 border-dashed border-t">
            <b className="flex size-7 items-center justify-center text-white bg-green-600 text-sm">A</b>
            <p className="m-0!">{a}</p>
        </div>
    </div>
  );
}
