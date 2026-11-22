export default function StatCard({ title, value, icon: Icon, variant = "default" }) {
  return (
    <article className={`stat-card stat-card--${variant}`}>
      <div className="stat-card__info">
        <span className="stat-card__label">{title}</span>
        <strong className="stat-card__value">{value}</strong>
      </div>
      <div className="stat-card__icon" aria-hidden="true">
        <Icon size={20} />
      </div>
    </article>
  );
}