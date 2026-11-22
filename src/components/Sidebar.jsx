import { LayoutDashboard, CheckSquare, FileText, Settings, X } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, active: true },
  { id: "tasks", label: "My Tasks", icon: CheckSquare, active: false },
  { id: "notes", label: "Focus Notes", icon: FileText, active: false },
  { id: "settings", label: "Settings", icon: Settings, active: false },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`} aria-label="Primary navigation">
        <div className="sidebar__brand">
          <div className="sidebar__logo">F</div>
          <span className="sidebar__title">FocusBoard</span>
          <button
            type="button"
            className="sidebar__close-btn"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar__nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`sidebar__link ${item.active ? "sidebar__link--active" : ""}`}
                aria-current={item.active ? "page" : undefined}
                onClick={onClose}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}