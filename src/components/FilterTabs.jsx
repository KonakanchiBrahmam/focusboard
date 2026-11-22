const STATUS_TABS = ["All", "To do", "In progress", "Completed"];

export default function FilterTabs({
  statusFilter,
  onStatusChange,
  priorityFilter,
  onPriorityChange,
  hasActiveFilters,
  onResetFilters,
}) {
  return (
    <div className="filters">
      <div className="filter-tabs" role="tablist" aria-label="Filter tasks by status">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={statusFilter === tab}
            className={`filter-tab ${statusFilter === tab ? "filter-tab--active" : ""}`}
            onClick={() => onStatusChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="filter-controls">
        <label htmlFor="priority-filter" className="sr-only">
          Filter by priority
        </label>
        <select
          id="priority-filter"
          className="filter-select"
          value={priorityFilter}
          onChange={(e) => onPriorityChange(e.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>

        {hasActiveFilters && (
          <button
            type="button"
            className="btn btn--ghost"
            onClick={onResetFilters}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}