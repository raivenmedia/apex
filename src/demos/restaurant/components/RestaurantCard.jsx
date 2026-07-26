function RestaurantCard({ title, description, price, status, tags = [] }) {
  return (
    <article className="restaurant-card">
      <div className="restaurant-card-header">
        <div>
          <h3>{title}</h3>
          <div className="menu-item-labels">
            {tags.map((tag) => (
              <span key={tag} className="menu-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="menu-item-price">{price}</div>
      </div>
      <p className="menu-item-description">{description}</p>
      {status ? <span className="menu-status">{status}</span> : null}
    </article>
  );
}

export default RestaurantCard;
