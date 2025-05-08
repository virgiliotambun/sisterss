import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/atoms/Button';
import {getDatabase, ref, onValue} from 'firebase/database';

const initialProducts = [
  {
    id: '1',
    name: "Men's Harrington Jacket",
    price: '$148.00',
    image: require('../../assets/Harringtons.svg'),
    favorite: false,
  },
  {
    id: '2',
    name: "Max Cirro Men's Slides",
    price: '$55.00',
    oldPrice: '$100.97',
    image: require('../../assets/Slides.svg'),
    favorite: true,
  },
  {
    id: '3',
    name: 'Skating Shirt',
    price: '$120.00',
    image: require('../../assets/Shirty.svg'),
    favorite: false,
  },
  {
    id: '4',
    name: 'Nike SB Bag',
    price: '$100.00',
    image: require('../../assets/Nike.svg'),
    favorite: false,
  },
];

const Home = ({navigation, route}) => {
  const {uid} = route.params;
  const [user, setUser] = useState({});
  const db = getDatabase();

  useEffect(() => {
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setUser(data);
      }
    });
  }, []);

  const [products, setProducts] = useState(initialProducts);

  const toggleFavorite = id => {
    const updated = products.map(product =>
      product.id === id ? {...product, favorite: !product.favorite} : product,
    );
    setProducts(updated);
  };

  const onSubmit = () => {
    navigation.navigate('HomePage');
  };

  const onSubmitNotifikasi = () => {
    navigation.navigate('Notifikasi');
  };

  const onSubmitFavorite = () => {
    navigation.navigate('Favorite', {uid});
  };

  const onSubmitUser = () => {
    navigation.navigate('Settings', {uid});
  };

  const renderItem = ({item}) => (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductPage')}>
        <Image source={item.image} style={styles.productImage} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={() => toggleFavorite(item.id)}>
        <Icon
          name={item.favorite ? 'heart' : 'heart-outline'}
          size={18}
          color={item.favorite ? 'red' : '#333'}
        />
      </TouchableOpacity>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>{item.price}</Text>
        {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings', {uid})}>
          <Image
            source={require('../../assets/AnoninousProfile.svg')}
            style={styles.profilePhoto}
          />
        </TouchableOpacity>

        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchBar}
        />
        <TouchableOpacity>
          <Button
            label="Search"
            color="#FFCCE1"
            textColor="white"
            onPress={() => navigation.navigate('SearchResult')}
          />
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={onSubmit}>
          <Text style={styles.navTextActive} size={24} color="#FF3B30">
            HOME
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={onSubmitNotifikasi}>
          <Text style={styles.navTextActive} size={24} color="#FF3B30">
            NOTIFIKASI
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={onSubmitFavorite}>
          <Text style={styles.navTextActive} size={24} color="#FF3B30">
            FAVORITE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={onSubmitUser}>
          <Text style={styles.navTextActive} size={24} color="#FF3B30">
            USER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 55,
    height: 55,
    borderRadius: 100,
    marginRight: 12,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 40,
  },
  productList: {
    paddingHorizontal: 8,
  },
  productCard: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    margin: 8,
    padding: 40,
    borderRadius: 12,
    position: 'relative',
  },
  productImage: {
    width: '120%',
    height: 150,
    borderRadius: 8,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    marginLeft: 6,
    color: '#888',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFD3DC', // pink muda
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navTextActive: {
    fontSize: 20,
    color: '#FF3B30', // merah terang
    fontWeight: 'bold',
    marginTop: 4,
  },
});
