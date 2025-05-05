import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../../components/molecules/Header'; 
import TextInput from '../../components/molecules/TextInput'; 
import Button from '../../components/atoms/Button';   
import Gap from '../../components/atoms/Gap';     

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Forgot Password" />
      <View style={styles.contentContainer}>
        <Gap height={24} />
        <TextInput
          label="Email Address"
          placeholder="Enter Email Address"
          style={styles.inputStyle}
        />
        <Gap height={24} />
        <Button label="Continue" color="#FFCCE1" textColor="white" />
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
    paddingTop: 40,
  },
  inputStyle: {
    backgroundColor: '#F2F9FF',
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

export default ForgotPassword;
