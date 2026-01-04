import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import GlobalImage from './components/GlobalImage';
import GlobalInfo from './components/GlobalInfo';
import ActivitiesList from './components/ActivitiesList';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {

  const products = [
    { id: 1, name: "Girona's Cathedral", price: "10", quantity: 0, image: process.env.PUBLIC_URL + "/multimedia-files/catedral.jpg", link: "" },
    { id: 2, name: "Girona's Wall", price: "5", quantity: 0, image: process.env.PUBLIC_URL + "/multimedia-files/muralla.jpg", link: "" },
    { id: 3, name: "Montilivi Stadium", price: "0", quantity: 0, image: process.env.PUBLIC_URL + "/multimedia-files/estadiMontilivi.jpg", link: "https://www.gironafc.cat" },
    { id: 4, name: "Walk in la Devesa", price: "0", quantity: 0, image: process.env.PUBLIC_URL + "/multimedia-files/devesa.jpg", link: "" },
    { id: 5, name: "Banys Àrabs", price: "2", quantity: 0, image: process.env.PUBLIC_URL + "/multimedia-files/banysArabs.jpg", link: "" },
    { id: 6, name: "Cinema's musuem", price: "7", quantity: 0, image: process.env.PUBLIC_URL + "/multimedia-files/cinema.jpg", link: "" }
  ];

  const [cartItems, setCartItems] = useState([]);

   const addToCart = (product) => {
    if (cartItems.find(item => item.id === product.id)) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const removeFromCart = (productId) => {
    const newCart = cartItems.filter(item => item.id !== productId);
    setCartItems(newCart);
  };

  return (
    <div className="App">
      <Header />
      <GlobalImage />
      <GlobalInfo />
      <main className="main-content">        
        <section className="activities-section">
          <ActivitiesList products={products} addToCart={addToCart} />
        </section>

        <section className="cart-section">
          <Cart items={cartItems} onRemove={removeFromCart} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default App;
