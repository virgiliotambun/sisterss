import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        Alert.alert('Success', 'Login successful!');
        navigation.navigate('HomePage', {uid: user.uid});
      })
      .catch(error => {
        Alert.alert('Login Failed', error.message);
      });
  };

  const onSubmitForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Sign in</Text>
      </View>
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Gap height={24} />
        <Button
          label="Continue"
          color="#FFCCE1"
          textColor="white"
          onPress={onSubmit}
        />
        <Gap height={10} />
        <TouchableOpacity onPress={onSubmitForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password? Reset</Text>
        </TouchableOpacity>
        <Gap height={40} />
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.separatorText}>
              Don't have an Account? Create One
            </Text>
          </TouchableOpacity>
          <View style={styles.separatorLine} />
        </View>
        <Gap height={30} />
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: 'https://img.icons8.com/color/48/000000/google-logo.png',
            }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continue With Google</Text>
        </TouchableOpacity>
        <Gap height={16} />
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: 'https://img.icons8.com/color/48/000000/facebook-new.png',
            }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continue With Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 75,
  },
  headerContainer: {
    paddingHorizontal: 24,
    paddingTop: 40,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  forgotPassword: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-start',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  separatorText: {
    color: 'black',
    fontSize: 12,
    marginRight: 150,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F9FF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  socialText: {
    fontSize: 16,
    color: 'black',
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
