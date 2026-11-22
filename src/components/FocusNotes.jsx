import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "FOCUS NOTES · 1 OF 3",
    title: "Plan your top priorities",
    description: "Start with high-impact tasks first and keep your daily scope realistic.",
  },
  {
    id: 2,
    tag: "FOCUS NOTES · 2 OF 3",
    title: "Track steady progress",
    description: "Move tasks from To do to In progress as you work so your stats stay accurate.",
  },
  {
    id: 3,
    tag: "FOCUS NOTES · 3 OF 3",
    title: "Review and wrap up",
    description: "Check due dates before closing out your day and celebrate completed work.",
  },
];

export default function FocusNotes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className="focus-notes" aria-label="Focus Notes carousel">
      <div className="focus-notes__content">
        <span className="focus-notes__tag">
          <Sparkles size={14} aria-hidden="true" />
          {currentSlide.tag}
        </span>
        <h2 className="focus-notes__title">{currentSlide.title}</h2>
        <p className="focus-notes__desc">{currentSlide.description}</p>
      </div>

      <div className="focus-notes__controls">
        <div className="focus-notes__dots" role="tablist" aria-label="Focus Notes slides">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to slide ${index + 1}`}
              className={`focus-notes__dot ${index === activeIndex ? "focus-notes__dot--active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="focus-notes__arrows">
          <button
            type="button"
            className="focus-notes__btn"
            onClick={handlePrev}
            aria-label="Previous focus note"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="focus-notes__btn"
            onClick={handleNext}
            aria-label="Next focus note"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}