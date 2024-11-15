const NextScreen = () => {
  const handleNext = () => {
    // Navigate to sign-up screen
    window.location.href = "/signup";
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.heading}>Welcome to 👋🏻</h1>
          <h2 style={styles.brand}>Potea</h2>
          <p style={styles.description}>
            Discover a wide selection of stylish and functional pots for your plants.

          </p>
          <button style={styles.button} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: 'url(../assets/pot2.jpg)',
    backgroundSize: "contain",
    backgroundPosition: "center", // Center the image
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay for better text readability
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent black box
    padding: "30px 40px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Soft shadow for depth
    maxWidth: "400px",
    width: "100%",
  },
  heading: {
    fontSize: "2rem",
    color: "white",
    marginBottom: "15px",
  },
  brand: {
    fontSize: "2.5rem",
    color: "#007958", // Accent green
    fontWeight: "bold",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    color: "white",
    lineHeight: "1.6",
    marginBottom: "30px",
    fontFamily: "'Open Sans', serif",
  },
  button: {
    backgroundColor: "#007958",
    color: "white",
    padding: "12px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    width: "100%",
  },
  buttonHover: {
    backgroundColor: "#005a3e",
  },
};

export default NextScreen;
