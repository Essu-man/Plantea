
import image1 from "./assets/pot 3.webp";
import image2 from "./assets/pot2.jpg";
import { default as image3, default as image4 } from "./assets/pots.jpg";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    price: "$140",
    description: "White and black",
    imageSrc: image1,
  },
  {
    id: 2,
    name: "Zip High Wall Tote",
    price: "$150",
    description: "White and blue",
    imageSrc: image2,
  },
  {
    id: 3,
    name: "Halfsize Tote",
    price: "$210",
    description: "Clay",
    imageSrc: image3,
  },
  {
    id: 4,
    name: "High Wall Tote",
    price: "$210",
    description: "Black and orange",
    imageSrc: image4,
  },
  {
    id: 5,
    name: "Zip Tote Basket",
    price: "$140",
    description: "White and black",
    imageSrc: image1,
  },
  {
    id: 6,
    name: "Zip High Wall Tote",
    price: "$150",
    description: "White and blue",
    imageSrc: image2,
  },
  {
    id: 7,
    name: "Halfsize Tote",
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
