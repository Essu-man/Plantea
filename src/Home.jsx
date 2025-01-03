import { useState } from "react";
import image1 from "./assets/pot 3.webp";
import image2 from "./assets/pot2.jpg";
import { default as image3, default as image4 } from "./assets/pots.jpg";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "Ceramic",
    price: "$140",
    description: "A porous material that dries more evenly than plastic",
    rating: 4.5,
    imageSrc: image1,
  },
  {
    id: 2,
    name: "Terracotta",
    price: "$150",
    description: "A clay planter that dries more evenly than plastic",
    rating: 4.0,
    imageSrc: image2,
  },
  {
    id: 3,
    name: "Wood",
    price: "$210",
    description: "A planter that dries faster than terracotta",
    rating: 4.8,
    imageSrc: image3,
  },
  {
    id: 4,
    name: "Fiberglass",
    price: "$210",
    description:
      "A lightweight option for plants that are 8 inches or larger in diameter",
    rating: 3.9,
    imageSrc: image4,
  },
  {
    id: 5,
    name: "Plastic",
    price: "$140",
    description: "A lightweight and durable option for modern gardening",
    rating: 4.2,
    imageSrc: image1,
  },
  {
    id: 6,
    name: "Metal",
    price: "$150",
    description: "Adds a contemporary look to your garden space",
    rating: 3.7,
    imageSrc: image2,
  },
  {
    id: 7,
    name: "Concrete",
    price: "$210",
    description: "Sturdy and long-lasting for large plants",
    rating: 4.5,
    imageSrc: image3,
  },
  {
    id: 8,
    name: "High Wall Tote",
    price: "$210",
    description: "Black and orange, ideal for decorative planting",
    rating: 4.3,
    imageSrc: image4,
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Search functionality
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Add to cart functionality
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`${product.name} has been added to your cart!`);
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h3>My Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? "Close Cart" : "Open Cart"}
      </button>

      <h2 className="section-title">Find Your Desired Plant Pots Here</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search pots..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="product-image"
              onClick={() => setSelectedProduct(product)}
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <p className="product-rating">Rating: {product.rating} ★</p>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({
          length: Math.ceil(filteredProducts.length / productsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active-page" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </span>
            <img
              src={selectedProduct.imageSrc}
              alt={selectedProduct.name}
              className="modal-image"
            />
            <h3 className="modal-name">{selectedProduct.name}</h3>
            <p className="modal-description">{selectedProduct.description}</p>
            <p className="modal-price">{selectedProduct.price}</p>
            <p className="modal-rating">
              Rating: {selectedProduct.rating} ★
            </p>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
