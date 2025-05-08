import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {getDatabase, ref, onValue} from 'firebase/database';

const Products = [
  {
    id: '1',
    name: 'Nike Fuel Pack',
    price: '$32.00',
    image: require('../../assets/Nike.svg'),
    favorite: true,
  },
  {
    id: '2',
    name: 'Nike Show X Rush',
    price: '$204',
    image: require('../../assets/Shades.svg'),
    favorite: true,
  },
  {
    id: '3',
    name: "Men's T-Shirt",
    price: '$45.00',
    image: require('../../assets/Tshirt.svg'),
    favorite: true,
  },
  {
    id: '4',
    name: "Men's Skate T-Shirt",
    price: '$45.00',
    image: require('../../assets/Shirty.svg'),
    favorite: true,
  },
];

const Favorite = ({navigation, route}) => {
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
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductPage', {product: item})}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <TouchableOpacity style={styles.heartIcon}>
        <Icon name="heart" size={20} color="red" />
      </TouchableOpacity>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favourites</Text>
      <FlatList
        data={Products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('HomePage', {uid})}>
          <Text style={styles.navTextActive}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Notifikasi')}>
          <Text style={styles.navTextActive}>NOTIFIKASI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Favorite')}>
          <Text style={styles.navTextActive}>FAVORITE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Settings', {uid})}>
          <Text style={styles.navTextActive}>USER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 16,
    paddingTop: 100,
    textAlign: 'center',
    color: 'black',
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    margin: 10,
    borderRadius: 10,
    padding: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 25,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  name: {
    marginTop: 10,
    fontWeight: '500',
  },
  price: {
    fontWeight: 'bold',
    marginTop: 4,
    color: 'black',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFD3DC',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navTextActive: {
    fontSize: 20,
    color: '#FF3B30',
    fontWeight: 'bold',
    marginTop: 4,
  },
});
