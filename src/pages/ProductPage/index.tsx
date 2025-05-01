import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import TextInput from '../../components/molecules/TextInput';

const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['Olive']; // Tambahkan warna sesuai kebutuhan

const ProductPage = ({navigation}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Button
            label="Back"
            color="#FFCCE1"
            textColor="#FA3636"
            onPress={() => navigation.goBack()}
            style={styles.back}
          />
        </View>

        {/* Images */}
        <View style={styles.imageRow}>
          <Text style={styles.image}>Image Preholder</Text>
          <Text style={styles.image}>Image Preholder</Text>
        </View>
        <Gap height={50} />
        <View>
          {/* Product Info */}
          <Text style={styles.title}>Men's Harrington Jacket</Text>
          <Text style={styles.price}>$148.00</Text>

          {/* Size Dropdown */}
          <Text style={styles.label}>Size</Text>
          <TextInput placeholder={'Enter size...'} />

          {/* Color Dropdown */}
          <Text style={styles.label}>Color</Text>
          <TextInput placeholder={'Enter Color...'} />

          {/* Quantity */}
          <Text style={styles.label}>Quantity</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Description */}
          <Text style={styles.description}>
            Built for life and made to last, this full-zip corduroy jacket is
            part of our Nike Life collection. The spacious fit gives you
          </Text>

          {/* Button */}
          <Button
            label="Take Product"
            color="#FDCEDF"
            textColor="#fff"
            width="100%"
            onPress={() => navigation.navigate('OrderPlaced')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  image: {
    width: '48%',
    height: 300,
    borderRadius: 8,
    backgroundColor: '#eee', // placeholder
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 8,
  },
  label: {
    fontSize: 28,
    marginTop: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  dropdown: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    height: 48,
  },
  dropdownText: {
    textAlign: 'left',
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f6fb',
    borderRadius: 12,
    padding: 6,
    width: 350,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quantityButton: {
    backgroundColor: '#FDCEDF',
    borderRadius: 20,
    width: 35,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 13,
    color: '#444',
    marginBottom: 16,
  },
});
