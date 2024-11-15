

const NextScreen = () => {
    const handleNext = () => {
        // Navigate to sign-up screen
        window.location.href = "/signup";
    };

    return (
      <div style={styles.container}>
        <div style={styles.overlay}>
          <h1 style={styles.text}>Welcome to 👋🏻</h1>
          <h2 style={styles.text2}>Potea</h2>
          <h3 style={styles.text3}>Discover a wide selection of stylish and functional pots for your plants.<br />
            Find the perfect match for your home and garden to enhance your greenery.</h3>
          <button style={styles.button} onClick={handleNext}>Next</button>
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
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '0 20px', // Add padding for small screens
    },
    text: {
      color: 'white',
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px', // Space between text elements
    },
    text2: {
      color: '#007958',
      fontSize: '4rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '30px',
    },
    text3: {
      color: 'white',
      marginTop: '30px',
      fontSize: '1.3rem',
      textAlign: 'center',
      maxWidth: '80%',
      lineHeight: '1.6',
      fontFamily: '"Roboto", sans-serif', // Use the new font
    },
    button: {
      backgroundColor: '#007958',
      color: 'white',
      padding: '20px 30px',
      fontSize: '1.2rem',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      marginTop: '40px',
      width:'15%',
      transition: 'all 0.3s ease',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    },
    // Add responsiveness
    '@media screen and (max-width: 1200px)': {
      container: {
        padding: '10px',
      },
      text: {
        fontSize: '1.8rem',
      },
      text2: {
        fontSize: '3rem',
        marginBottom: '20px',
      },
      text3: {
        fontSize: '1.3rem',
      },
      button: {
        padding: '12px 25px',
        fontSize: '1rem',
      },
    },
    '@media screen and (max-width: 768px)': {
      container: {
        padding: '5px',
      },
      text: {
        fontSize: '1.5rem',
      },
      text2: {
        fontSize: '2.5rem',
        marginBottom: '15px',
      },
      text3: {
        fontSize: '1.2rem',
      },
      button: {
        padding: '10px 20px',
        fontSize: '0.9rem',
      },
    },
    '@media screen and (max-width: 480px)': {
      container: {
        padding: '5px',
      },
      text: {
        fontSize: '1.2rem',
      },
      text2: {
        fontSize: '2rem',
        marginBottom: '10px',
      },
      text3: {
        fontSize: '1rem',
      },
      button: {
        padding: '8px 15px',
        fontSize: '0.8rem',
      },
    },
};

export default NextScreen;
