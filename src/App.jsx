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

    return () => clearTimeout(timer);
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
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '150px',
    height: 'auto',
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
