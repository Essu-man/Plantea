const NextScreen = () => {
    return (
      <div style={styles.container}>
        <div style={styles.overlay}>
          <h1 style={styles.text}>Welcome to 👋🏻</h1>
          <h2 style={styles.text2}>Potea</h2>
          <h3 style={styles.text3}>Discover a wide selection of stylish and functional pots for your plants.
            Find the perfect match for your home and garden to enhance your greenery.</h3>
        </div>
      </div>
    );
  };
  const styles = {
    container: {
      backgroundImage: 'url(../assets/pot2.jpg)',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      height: '100vh',
      width:'100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      width: '100%',
      height: '100%', // Full height of the container
      display: 'flex', // Enables flexbox
      justifyContent: 'center', // Center content horizontally
      alignItems: 'center', // Center content vertically
      flexDirection: 'column', // Stack children vertically
      position: 'absolute',
      top:0,
      left:0,

    },
    text: {
      color: 'white', // Text color
      fontSize: '2rem', // Adjust the font size
      fontWeight: 'bold', // Make the text bold
      textAlign: 'center', // Center-align the text
    },
    text2: {
        color: '#007958',
        fontSize:'4rem',
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom:'55px',

    },
    text3:{
        color: 'white',
        marginTop:'55px',
    }
  };

  export default NextScreen;
