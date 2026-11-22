import { Calendar, Edit2, Trash2, Tag } from "lucide-react";

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  const statusClass = task.status.toLowerCase().replace(/\s+/g, "-");
  const priorityClass = task.priority.toLowerCase();

  return (
    <article className="task-card">
      <div className="task-card__main">
        <div className="task-card__top">
          <span className={`badge badge--priority-${priorityClass}`}>
            {task.priority}
          </span>
          <span className="badge badge--category">
            <Tag size={12} aria-hidden="true" />
            {task.category}
          </span>
          <span className={`badge badge--status-${statusClass}`}>
            {task.status}
          </span>
        </div>

        <h3 className="task-card__title">{task.title}</h3>
        {task.description && (
          <p className="task-card__desc">{task.description}</p>
        )}

        <div className="task-card__meta">
          <span className="task-card__date">
            <Calendar size={14} aria-hidden="true" />
            Due: {task.dueDate}
          </span>
        </div>
      </div>

      <div className="task-card__actions">
        <label htmlFor={`status-${task.id}`} className="sr-only">
          Change status for {task.title}
        </label>
        <select
          id={`status-${task.id}`}
          className="task-card__select"
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          <option value="To do">To do</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          type="button"
          className="icon-btn"
          onClick={() => onEdit(task)}
          aria-label={`Edit ${task.title}`}
        >
          <Edit2 size={16} />
        </button>

        <button
          type="button"
          className="icon-btn icon-btn--danger"
          onClick={() => onDelete(task)}
          aria-label={`Delete ${task.title}`}
        >
          <Trash2 size={16} />
        </button>
      </div>
    </article>
  );
}