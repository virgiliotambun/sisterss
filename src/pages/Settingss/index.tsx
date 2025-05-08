import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getDatabase, ref, onValue} from 'firebase/database';

const Settingss = ({navigation, route}) => {
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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Section */}
        <View style={styles.profileWrapper}>
          <Image
            source={require('../../assets/AnoninousProfile.svg')}
            style={styles.avatar}
          />

          <View style={styles.userInfoCard}>
            <View style={styles.userInfo}>
              <Text style={styles.name}>
                {user.firstname} {user.lastname}
              </Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate('Address')}>
            <Text style={styles.menuButtonText}>Address</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Out */}
        <View style={styles.bottomWrapper}>
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomePage', {uid})}>
          <Text style={styles.tabItem}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifikasi')}>
          <Text style={styles.tabItem}>NOTIFIKASI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
          <Text style={styles.tabItem}>FAVORITE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings', {uid})}>
          <Text style={styles.tabItem}>USER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settingss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100, // for tab bar
  },
  profileWrapper: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfoCard: {
    flexDirection: 'row',
    backgroundColor: '#F5F9FF',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  email: {
    color: '#999',
    fontSize: 14,
    marginTop: 4,
  },
  edit: {
    color: '#FFCCE1',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 12,
  },
  buttonGroup: {
    paddingHorizontal: 24,
  },
  menuButton: {
    backgroundColor: '#F5F9FF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: 16,
    color: '#000',
  },
  bottomWrapper: {
    alignItems: 'center',
    marginTop: 24,
  },
  signOutButton: {
    paddingVertical: 12,
  },
  signOutText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FDCEDF',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  tabItem: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
