const NextScreen = () => {
    return (
      <div style={styles.container}>
        <div style={styles.overlay}>
          <h1 style={styles.text}>Welcome to Potea 👋🏻</h1>
        </div>
      </div>
    );
  };

  const styles = {
    container: {
      backgroundImage: 'url(../assets/pot2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: '100%',
      height: '100%', // Full height of the container
      display: 'flex', // Enables flexbox
      justifyContent: 'center', // Center content horizontally
      alignItems: 'center', // Center content vertically
      flexDirection: 'column', // Stack children vertically
    },
    text: {
      color: 'white', // Text color
      fontSize: '2rem', // Adjust the font size
      fontWeight: 'bold', // Make the text bold
      textAlign: 'center', // Center-align the text
    },
  };

  export default NextScreen;
