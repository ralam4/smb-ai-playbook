import { useState, useEffect } from "react";
import GridPattern from "./GridPattern";

export default function ArchetypeQuestion({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [currentIndex]);

  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;

  function handleSelect(index, type) {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    setTimeout(() => onAnswer(type), 300);
  }

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-60px)]">
      <GridPattern
        width={48}
        height={48}
        x={-1}
        y={-1}
        className="fill-accent/[0.03] stroke-border-strong/40 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_20%,transparent_80%)]"
        squares={[
          [2, 3], [5, 1], [8, 5], [3, 7], [12, 2],
          [7, 8], [15, 4], [10, 6], [4, 10], [13, 8],
        ]}
      />
    <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-16">
      {/* Progress bar */}
      <div>
        <p className="font-[--font-mono] text-xs text-text-secondary">
          Question {currentIndex + 1} of {totalQuestions}
        </p>
        <div className="mt-2 h-1 w-full rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question text */}
      <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary text-center max-w-2xl mx-auto mt-12">
        {question.text}
      </h2>

      {/* Answer options */}
      <div className="flex flex-col gap-3 max-w-xl mx-auto mt-10">
        {question.options.map((option, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSelect(i, option.type)}
            className={`w-full text-left bg-surface border rounded-xl px-5 py-4 cursor-pointer transition-all duration-200 ${
              selectedIndex === i
                ? "border-accent bg-accent/10"
                : "border-border hover:border-accent/50 hover:shadow-sm"
            }`}
          >
            <span className="text-sm sm:text-base text-text-primary">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}
