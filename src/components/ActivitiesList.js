import ActivityCard from './ActivityCard';

function ActivitiesList({ products, addToCart }) {
  return (
    <header className="activitiesList">
        <h1>Activities in Girona</h1>
        <div className="activitiesList-cards">
        {products.map(product => (
          <ActivityCard key={product.id} product={product} onAdd={addToCart} />
        ))}
        </div>
    </header>
  );
}
export default ActivitiesList;