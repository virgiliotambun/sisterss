import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = ({navigation}) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    const db = getDatabase();

    if (!firstname || !lastname || !email || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        // Simpan data user ke database Realtime
        set(ref(db, 'users/' + user.uid), {
          firstname,
          lastname,
          email,
        });
      })
      .then(() => {
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('SignIn');
      })
      .catch(error => {
        Alert.alert('Sign Up Error', error.message);
      });
  };

  return (
    <View style={styles.pageContainer}>
      <Header title="Create Account" />
      <View style={styles.contentContainer}>
        <Gap height={24} />
        <TextInput
          placeholder="Firstname"
          value={firstname}
          onChangeText={setFirstname}
          style={styles.inputStyle}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Lastname"
          value={lastname}
          onChangeText={setLastname}
          style={styles.inputStyle}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          style={styles.inputStyle}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={styles.inputStyle}
        />
        <Gap height={24} />
        <Button
          label="Continue"
          color="#FFCCE1"
          textColor="white"
          onPress={onSubmit}
        />
        <Gap height={16} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  inputStyle: {
    backgroundColor: '#AFDDFF',
    color: '#000000',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 0,
  },
  backButton: {
    backgroundColor: '#FFE5EC',
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backText: {
    color: '#FF4D6D',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignUp;
