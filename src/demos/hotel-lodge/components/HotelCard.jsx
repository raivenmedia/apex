function HotelCard({ label, title, description, children, className = '' }) {
  return (
    <article className={`hotel-card ${className}`.trim()}>
      {label ? <span className="hotel-card-label">{label}</span> : null}
      {title ? <h3>{title}</h3> : null}
      {description ? <p>{description}</p> : null}
      {children}
    </article>
  );
}

export default HotelCard;
