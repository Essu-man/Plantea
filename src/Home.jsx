import { useEffect, useState } from "react";
import { getEquipment } from "./Firebase/FirebaseConfig.js";
import "./Home.css";

const Home = () => {
  const [pots, setPots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPots = async () => {
      try {
        const potsData = await getEquipment(); // Fetch pots data
        setPots(potsData);
      } catch (error) {
        console.error("Error fetching pots: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPots();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>🌿 Plantea Pots</h1>
        <p style={styles.subtitle}>Find the perfect pot for your plants!</p>
      </header>
      {loading ? (
        <div style={styles.loader}>Loading pots...</div>
      ) : pots.length > 0 ? (
        <div style={styles.grid}>
          {pots.map((pot) => (
            <div key={pot.id} style={styles.card}>
              <img
                src={pot.imageUrl || "../public/assets/pot2.jpg"}
                alt={pot.name}
                style={styles.image}
              />
              <h3 style={styles.potName}>{pot.name}</h3>
              <p style={styles.price}>{pot.price} GHS</p>
              <button style={styles.buyButton}>Buy Now</button>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.noData}>
          <p>No pots available at the moment. Check back later!</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#007958",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#444",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  potName: {
    fontSize: "1.2rem",
    color: "#007958",
    marginBottom: "10px",
  },
  price: {
    fontSize: "1rem",
    color: "#444",
    marginBottom: "15px",
  },
  buyButton: {
    padding: "10px 20px",
    backgroundColor: "#007958",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buyButtonHover: {
    backgroundColor: "#005a3d",
  },
  loader: {
    fontSize: "1.2rem",
    color: "#444",
    marginTop: "20px",
  },
  noData: {
    fontSize: "1rem",
    color: "#777",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default Home;
