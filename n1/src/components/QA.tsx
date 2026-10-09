export function QA({ question: q, answer: a }: { question: string; answer: string }) {
  return (
    <div className="my-2 border gap-2">
        <div className="flex gap-3 p-2">
            <b className="flex size-7 items-center justify-center text-white bg-blue-500 text-sm">Q</b>
            <p className="">{q}</p>
        </div>

        <div className="flex gap-3 p-2 border-dashed border-t">
            <b className="flex size-7 items-center justify-center text-white bg-green-600 text-sm">A</b>
            <p className="">{a}</p>
        </div>
    </div>
  );
}
