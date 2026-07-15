import { useState } from "react";
import Blob from "./Blob";

// Note: the parent (ArchetypePage) mounts this component with `key={currentIndex}`
// so selectedIndex naturally resets to null on every new question — no effect needed.
export default function ArchetypeQuestion({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;

  function handleSelect(index, type) {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    setTimeout(() => onAnswer(type), 300);
  }

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-60px)]">
      <Blob
        variant={4}
        color="peach"
        className="absolute -top-16 -right-24 w-72 h-72 opacity-30 pointer-events-none hidden sm:block"
      />
      <Blob
        variant={2}
        color="mint"
        className="absolute bottom-0 -left-24 w-64 h-64 opacity-25 pointer-events-none hidden sm:block"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16">
        {/* Progress bar — terracotta fill on sand track w/ a dot marker at the tip */}
        <div>
          <p className="font-[--font-mono] text-xs text-ink-soft">
            Question {currentIndex + 1} of {totalQuestions}
          </p>
          <div className="mt-3 relative h-2 w-full rounded-full bg-sand">
            <div
              className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
            <span
              aria-hidden="true"
              className="absolute top-1/2 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-accent-light -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-out"
              style={{ left: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question text */}
        <h2 className="font-[--font-display] font-semibold text-2xl sm:text-3xl text-ink text-center max-w-2xl mx-auto mt-14">
          {question.text}
        </h2>

        {/* Answer options — soft-card pill buttons */}
        <div className="flex flex-col gap-3 max-w-xl mx-auto mt-10">
          {question.options.map((option, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSelect(i, option.type)}
              className={`w-full text-left rounded-[1.75rem] border px-5 py-4 sm:px-6 sm:py-4.5 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                selectedIndex === i
                  ? "border-accent bg-peach-light"
                  : "border-border bg-surface hover:border-accent/50"
              }`}
            >
              <span className="text-sm sm:text-base text-ink">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
