import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add authentication logic here
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        <p style={styles.footerText}>
          Already have an account? <a href="/login" style={styles.link}>Log In</a>
        </p>
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
    backgroundColor: "black",
    width: "100%",
  },
  formContainer: {
    backgroundColor: "black",
    padding: "30px 40px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    border: "1px solid #444", // Slight outline for the container
  },
  heading: {
    marginBottom: "20px",
    fontSize: "2rem",
    color: "#007958", // Green color for heading
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #444",
    borderRadius: "5px",
    backgroundColor: "#222",
    color: "white",
  },
  button: {
    backgroundColor: "#007958",
    color: "white",
    padding: "12px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
  footerText: {
    marginTop: "15px",
    fontSize: "0.9rem",
    color: "#bbb", // Lighter gray for text
  },
  link: {
    color: "#007958",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default SignUp;
