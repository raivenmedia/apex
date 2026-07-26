function SalonCard({ title, description, price, label, children }) {
  return (
    <article className="card-surface salon-card">
      {label ? <div className="salon-hero-eyebrow">{label}</div> : null}
      <h3>{title}</h3>
      {price ? <h4>{price}</h4> : null}
      <p>{description}</p>
      {children}
    </article>
  );
}

export default SalonCard;
