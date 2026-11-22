import TaskCard from "./TaskCard";

export default function TaskList({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
  hasActiveFilters,
  onResetFilters,
}) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state__title">No tasks found</p>
        <p className="empty-state__desc">
          {hasActiveFilters
            ? "Try adjusting your search or filters."
            : "Click \"Add Task\" to create your first task."}
        </p>
        {hasActiveFilters && (
          <button type="button" className="btn btn--secondary" onClick={onResetFilters}>
            Clear Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}