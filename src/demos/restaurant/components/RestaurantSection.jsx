function RestaurantSection({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`section-surface ${className}`.trim()}>
      <div className="section-heading restaurant">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default RestaurantSection;
