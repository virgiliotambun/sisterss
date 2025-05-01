import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Create Account" />
      <View style={styles.contentContainer}>

        <View style={styles.customerContainer}>
    
        </View>
        <Gap height={24} />

        <TextInput
          placeholder="Firstname"
          style={styles.inputStyle}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Lastname"
          style={styles.inputStyle}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Email Address"
          style={styles.inputStyle}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.inputStyle}
        />
        <Gap height={24} />
        <Button label="Continue" color="#FFCCE1" textColor="white" onPress={() => navigation.navigate('SignIn')}/>
        <Gap height={16} />
        
        {/* BACK Button */}
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
    backgroundColor: '#AFDDFF', // Diubah di sini
    color: '#000000',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 0,
  },
  customerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  customerButton: {
    backgroundColor: '#FFCCE1',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  customerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FFE5EC',
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
