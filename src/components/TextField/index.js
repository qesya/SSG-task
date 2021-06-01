import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {styles} from './styles';

// create a component
const TextField = ({placeholder, onChangeText, style}) => {
  return (
    <View style={[styles.wrapperTextField, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default TextField;
