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
      backgroundImage: 'url(/path-to-your-image.jpg)', // Replace with the path to your image
      backgroundSize: 'cover', // Ensures the image covers the entire screen
      backgroundPosition: 'center', // Centers the image
      height: '100vh', // Full viewport height
      display: 'flex', // Enables flexbox
      justifyContent: 'center', // Center content horizontally
      alignItems: 'center', // Center content vertically
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
      width: '100%', // Full width of the container
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
