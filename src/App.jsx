import { useState, useMemo } from "react";
import { ListTodo, Clock, CheckCircle2, PieChart } from "lucide-react";
import { sampleTasks } from "./data/sampleTasks";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import FocusNotes from "./components/FocusNotes";
import SearchBar from "./components/SearchBar";
import FilterTabs from "./components/FilterTabs";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("focusboard_tasks", sampleTasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const stats = useMemo(() => {
    const total = tasks.length;
    const inProgress = tasks.filter((t) => t.status === "In progress").length;
    const completed = tasks.filter((t) => t.status === "Completed").length;
    const completionPct = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { total, inProgress, completed, completionPct };
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return tasks.filter((task) => {
      const matchesSearch = task.title.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "All" || task.status === statusFilter;
      const matchesPriority = priorityFilter === "All" || task.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, searchQuery, statusFilter, priorityFilter]);

  const hasActiveFilters =
    searchQuery.trim() !== "" || statusFilter !== "All" || priorityFilter !== "All";

  const handleResetFilters = () => {
    setSearchQuery("");
    setStatusFilter("All");
    setPriorityFilter("All");
  };

  const handleOpenCreate = () => {
    setEditingTask(null);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleSaveTask = (taskData) => {
    setTasks((prev) => {
      const exists = prev.some((t) => t.id === taskData.id);
      if (exists) {
        return prev.map((t) => (t.id === taskData.id ? taskData : t));
      }
      return [taskData, ...prev];
    });
    setIsFormOpen(false);
    setEditingTask(null);
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  const handleConfirmDelete = () => {
    if (!taskToDelete) return;
    setTasks((prev) => prev.filter((t) => t.id !== taskToDelete.id));
    setTaskToDelete(null);
  };

  return (
    <div className="app-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-wrapper">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          onAddTask={handleOpenCreate}
        />

        <main className="main-content">
          <section className="stats-grid" aria-label="Task overview statistics">
            <StatCard title="Total Tasks" value={stats.total} icon={ListTodo} variant="total" />
            <StatCard title="In Progress" value={stats.inProgress} icon={Clock} variant="progress" />
            <StatCard title="Completed" value={stats.completed} icon={CheckCircle2} variant="done" />
            <StatCard title="Completion" value={`${stats.completionPct}%`} icon={PieChart} variant="pct" />
          </section>

          <FocusNotes />

          <section className="tasks-section" aria-label="Task management">
            <div className="tasks-toolbar">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <FilterTabs
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                priorityFilter={priorityFilter}
                onPriorityChange={setPriorityFilter}
                hasActiveFilters={hasActiveFilters}
                onResetFilters={handleResetFilters}
              />
            </div>

            <TaskList
              tasks={filteredTasks}
              onEdit={handleOpenEdit}
              onDelete={(task) => setTaskToDelete(task)}
              onStatusChange={handleStatusChange}
              hasActiveFilters={hasActiveFilters}
              onResetFilters={handleResetFilters}
            />
          </section>
        </main>
      </div>

      {isFormOpen && (
        <TaskForm
          key={editingTask ? editingTask.id : "new"}
          editingTask={editingTask}
          onSave={handleSaveTask}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingTask(null);
          }}
        />
      )}

      {taskToDelete && (
        <div
          className="modal-backdrop"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="delete-dialog-title"
        >
          <div className="modal modal--sm">
            <h2 id="delete-dialog-title" className="modal__title">
              Delete Task
            </h2>
            <p className="modal__text">
              Are you sure you want to remove <strong>{taskToDelete.title}</strong>? This action cannot be undone.
            </p>
            <div className="form-actions">
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => setTaskToDelete(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn--danger"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}