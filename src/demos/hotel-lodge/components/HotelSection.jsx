function HotelSection({ id, title, description, className = '', children }) {
  return (
    <section id={id} className={`hotel-section ${className}`.trim()}>
      <div className="container hotel-section-inner">
        <div className="section-heading hotel-section-heading">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export default HotelSection;
