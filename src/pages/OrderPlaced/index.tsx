import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const OrderPlaced = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/OrderSuccessful.svg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.wbox}>
        <View style={styles.textContainer}>
          <Text style={styles.heading1}>Take Product Successfully</Text>
          <Gap height={16} />
          <Text style={styles.desc}>
            Barang tersedia di butik, segera ambil sebelum kehabisan!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label="Go Back"
            color="#FFCCE1"
            textColor="#FFFFFF"
            onPress={() => navigation.goBack()}
            width="100%"
          />
        </View>
      </View>
    </View>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCCE1',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  image: {
    width: 300,
    height: 300,
  },
  wbox: {
    flex: 1,
    backgroundColor: '#F2F9FF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'space-between', // Membuat text dan button berada di atas-bawah
  },
  textContainer: {
    marginTop: 20, // Turunkan heading & deskripsi
    alignItems: 'center',
  },
  heading1: {
    fontSize: 40,
    color: '#272727',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    fontSize: 20,
    color: '#7B7B7B',
    textAlign: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    width: '120%',
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: 32,
    borderRadius: 100,
  },
});
