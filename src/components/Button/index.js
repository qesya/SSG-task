import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {styles} from './styles';

// create a component
const Button = ({onPress, title}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="#efefef0a">
      <View style={styles.wrapper}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default Button;
