function SalonSection({ id, title, description, children, className = '' }) {
  return (
    <section id={id} className={`section-surface ${className}`.trim()}>
      <div className="section-heading salon">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default SalonSection;
