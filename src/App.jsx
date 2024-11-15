

const App = () => {
  return (
    <div style={styles.container}>
      <img src="../src/assets/leaf-green-icon.webp" alt="Logo" style={styles.logo} />
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    overflow: 'hidden',
  },
  logo: {
    width: '150px',
    height: 'auto',
  },
};

export default App;
