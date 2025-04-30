import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = () => {
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
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
