import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Logo from '../../assets/logo.png'; // Import your logo image
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('SignIn'), 3000); // Navigate to SignIn after 3 seconds
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={Logo} //  USE a regular image.
        style={styles.logo}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC1DA', // Pink background
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 100, // Make it circular
  },
});

export default SplashScreen;
