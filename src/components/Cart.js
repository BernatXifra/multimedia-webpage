function Cart({ items, onRemove }) {
  
  if (!items) items = [];
  const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <div className="cart-container">
      <h3>Your activities</h3>

      {items.length === 0 ? (
        <p className="empty-msg">The card is empty</p>
      ) : (
        <ul className="cart-list">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity"> (x{item.quantity})</span>
                <span className="item-price">{item.quantity * item.price}€</span>
              </div>
              
              <button 
                className="btn-remove" 
                onClick={() => onRemove(item.id)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-footer">
        <span>Total:</span>
        <span className="total-price">{total}€</span>
      </div>
    </div>
  );
}

export default Cart;
