
import image1 from "./assets/pot 3.webp";
import image2 from "./assets/pot2.jpg";
import { default as image3, default as image4 } from "./assets/pots.jpg";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "Ceramic ",
    price: "$140",
    description: " A porous material that dries more evenly than plastic",
    imageSrc: image1,
  },
  {
    id: 2,
    name: "Terracotta",
    price: "$150",
    description: " A clay planter that dries more evenly than plastic",
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
    description: " A lightweight option for plants that are 8 inches or larger in diameter",
    imageSrc: image4,
  },
  {
    id: 5,
    name: "Plastic",
    price: "$140",
    description: "White and black",
    imageSrc: image1,
  },
  {
    id: 6,
    name: "Metal",
    price: "$150",
    description: "White and blue",
    imageSrc: image2,
  },
  {
    id: 7,
    name: "Concrete",
    price: "$210",
    description: "Clay",
    imageSrc: image3,
  },
  {
    id: 8,
    name: "High Wall Tote",
    price: "$210",
    description: "Black and orange",
    imageSrc: image4,
  },
];

export default function Home() {
  return (
    <div className="home-container">
      <h2 className="section-title">Find your desired pots here</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="add-to-bag">Add to bag</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
