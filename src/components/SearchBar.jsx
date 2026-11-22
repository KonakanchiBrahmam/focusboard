import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <Search size={18} className="search-bar__icon" aria-hidden="true" />
      <label htmlFor="task-search" className="sr-only">
        Search tasks by title
      </label>
      <input
        id="task-search"
        type="text"
        className="search-bar__input"
        placeholder="Search tasks by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}