import { useState } from "react";
import { X } from "lucide-react";

export default function TaskForm({ editingTask, onSave, onCancel }) {
  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(editingTask?.description || "");
  const [category, setCategory] = useState(editingTask?.category || "Development");
  const [status, setStatus] = useState(editingTask?.status || "To do");
  const [priority, setPriority] = useState(editingTask?.priority || "Medium");
  const [dueDate, setDueDate] = useState(
    editingTask?.dueDate || new Date().toISOString().split("T")[0]
  );
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const newErrors = {};

    if (!trimmedTitle) {
      newErrors.title = "Task title is required and cannot be blank.";
    }
    if (!dueDate) {
      newErrors.dueDate = "Please select a due date.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({
      id: editingTask ? editingTask.id : Date.now(),
      title: trimmedTitle,
      description: description.trim(),
      category,
      status,
      priority,
      dueDate,
    });
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="task-form-title"
    >
      <div className="modal">
        <div className="modal__header">
          <h2 id="task-form-title" className="modal__title">
            {editingTask ? "Edit Task" : "Create New Task"}
          </h2>
          <button
            type="button"
            className="icon-btn"
            onClick={onCancel}
            aria-label="Close form"
          >
            <X size={20} />
          </button>
        </div>

        <form className="task-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="task-title">
              Title <span aria-hidden="true">*</span>
            </label>
            <input
              id="task-title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
              }}
              placeholder="e.g., Complete FocusBoard UI"
              aria-invalid={Boolean(errors.title)}
            />
            {errors.title && <p className="form-error">{errors.title}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="task-desc">Description</label>
            <textarea
              id="task-desc"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add task details (optional)"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="task-status">Status</label>
              <select
                id="task-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="To do">To do</option>
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="task-priority">Priority</label>
              <select
                id="task-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="task-category">Category</label>
              <select
                id="task-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Research">Research</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="task-due">
                Due Date <span aria-hidden="true">*</span>
              </label>
              <input
                id="task-due"
                type="date"
                value={dueDate}
                onChange={(e) => {
                  setDueDate(e.target.value);
                  if (errors.dueDate) setErrors((prev) => ({ ...prev, dueDate: "" }));
                }}
                aria-invalid={Boolean(errors.dueDate)}
              />
              {errors.dueDate && <p className="form-error">{errors.dueDate}</p>}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn--secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn--primary">
              {editingTask ? "Save Changes" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}