import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const SearchResult = ({navigation}) => {
  const [searchText, setSearchText] = useState('Blouse and Jean');

  const clearSearch = () => {
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      {/* Baris atas: Tombol Back + Search Box */}
      <View style={styles.topBar}>
        {/* Tombol Back */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        {/* Kotak Search */}
      </View>

      {/* Konten utama */}
      <View style={styles.centerContent}>
        <Image
          source={require('../../assets/magnifier.png')}
          style={styles.icon}
        />
        <Text style={styles.message}>
          Sorry, we couldn't find any{'\n'}matching result for your{'\n'}Search.
        </Text>
      </View>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 16,
  },
  backButton: {
    width: 62,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#FFCCCE1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backIcon: {
    fontSize: 16,
    color: '#FA3636',
    fontFamily: 'Gabarito',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    resizeMode: 'contain',
  },
  searchText: {
    flex: 1,
    fontSize: 12,
    color: '#272727',
    fontFamily: 'Circular Std',
  },
  closeIcon: {
    fontSize: 16,
    color: '#999',
    marginLeft: 8,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  message: {
    width: 342,
    height: 90,
    textAlign: 'center',
    fontSize: 24,
    color: '#272727',
    marginBottom: 20,
    lineHeight: 24,
    fontFamily: 'Circular Std',
  },
  button: {
    width: 185,
    height: 52,
    marginTop: 16,
    backgroundColor: '#FFCCE1',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '450',
  },
});