
function ActivityCard({ product, onAdd }) {
  return (
    <div className="activityCard">
      <h3>{product.name}</h3>
      {product.link ? (
          <a 
            href={product.link} 
            className="external-link"
          >
            Visit official website ↗
          </a>
        ) : (
          <p>{product.price} €</p>
        )}
      <img src={product.image} alt={product.name} />
      <button onClick={() => onAdd(product)}>Add to cart</button>
    </div>
  );
}
export default ActivityCard;
