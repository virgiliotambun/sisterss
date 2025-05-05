import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, value, onChangeText, ...rest}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
});
