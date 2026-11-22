import { Menu, Plus } from "lucide-react";

export default function Header({ onMenuClick, onAddTask }) {
  return (
    <header className="header">
      <div className="header__left">
        <button
          type="button"
          className="header__menu-btn"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 className="header__title">Dashboard</h1>
          <p className="header__subtitle">Organize your tasks and daily focus</p>
        </div>
      </div>

      <button type="button" className="btn btn--primary" onClick={onAddTask}>
        <Plus size={18} aria-hidden="true" />
        <span>Add Task</span>
      </button>
    </header>
  );
}