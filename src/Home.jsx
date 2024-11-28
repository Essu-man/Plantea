import { useState } from "react"; // New addition for state handling
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
    imageSrc: image1,
  },
  {
    id: 2,
    name: "Terracotta",
    price: "$150",
    description: "A clay planter that dries more evenly than plastic",
    imageSrc: image2,
  },
  {
    id: 3,
    name: "Wood",
    price: "$210",
    description: "A planter that dries faster than terracotta",
    imageSrc: image3,
  },
  {
    id: 4,
    name: "Fiberglass",
    price: "$210",
    description:
      "A lightweight option for plants that are 8 inches or larger in diameter",
    imageSrc: image4,
  },
  {
    id: 5,
    name: "Plastic",
    price: "$140",
    description: "A lightweight and durable option for modern gardening",
    imageSrc: image1,
  },
  {
    id: 6,
    name: "Metal",
    price: "$150",
    description: "Adds a contemporary look to your garden space",
    imageSrc: image2,
  },
  {
    id: 7,
    name: "Concrete",
    price: "$210",
    description: "Sturdy and long-lasting for large plants",
    imageSrc: image3,
  },
  {
    id: 8,
    name: "High Wall Tote",
    price: "$210",
    description: "Black and orange, ideal for decorative planting",
    imageSrc: image4,
  },
];

export default function Home() {
  const [cart, setCart] = useState([]); // State to handle cart items
  const [selectedProduct, setSelectedProduct] = useState(null); // State for modal feature

  // Function to handle adding to cart
  const handleAddToBag = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your bag!`);
  };

  // Function to open modal with product details
  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  // Function to close modal
  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="home-container">
      <h2 className="section-title">Find Your Desired Pots Here</h2>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="product-image"
              onClick={() => openProductModal(product)} // Open modal on click
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button
                className="add-to-bag"
                onClick={() => handleAddToBag(product)}
              >
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeProductModal}>
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
            <button
              className="add-to-bag"
              onClick={() => handleAddToBag(selectedProduct)}
            >
              Add to Bag
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
