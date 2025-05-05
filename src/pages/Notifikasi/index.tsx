import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BellIcon from '../../assets/bell.png'; // Pastikan file ini ada

const Notifikasi = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <View style={styles.contentWrapper}>
        <Image source={BellIcon} style={styles.icon} />
        <Text style={styles.message}>No Notification yet</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Categories</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Notifikasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 80,
    color: '#000',
    fontFamily: 'Gabarito-Bold',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  icon: {
    width: 100,
    height: 100,
  },
  message: {
    fontSize: 24,
    fontWeight: '500',
    color: '#272727',
  },
  button: {
    backgroundColor: '#FFCCE1',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 100,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  backButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#FFB6C1',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#fa3636',
    fontWeight: '700',
    fontFamily: 'Gabarito_Bold',
  },
});