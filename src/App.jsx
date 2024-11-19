import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/next');
    }, 10000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigate]);

  return (
    <div style={styles.container}>
      <img
        src="../assets/leaf-green-icon.webp"
        alt="Logo"
        style={styles.logo}
      />
      {loading && <div style={styles.spinner}></div>}
    </div>
  );
};

const styles = {
  container: {
    width: '100vw', // Full width of the viewport
    height: '100vh', // Full height of the viewport
    backgroundColor: 'black', // Black background
    display: 'flex', // Flexbox for centering
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  logo: {
    width: '150px', // Adjust logo size
    height: 'auto', // Maintain aspect ratio
  },
  spinner: {
    position: 'absolute',
    bottom: '50px', // Position at the bottom
    width: '40px', // Spinner size
    height: '40px',
    border: '4px solid transparent',
    borderTop: '4px solid green', // Green color for spinner
    borderRadius: '50%',
    animation: 'spin 1s linear infinite', // Spinning animation
  },
};

export default App;
