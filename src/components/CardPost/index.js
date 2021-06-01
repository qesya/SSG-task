import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {styles} from './styles';

// create a component
const CardPost = ({onPress, id, title, body, image, styleText}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="#efefef0a">
      <View style={styles.wrapper}>
        <View style={styles.wrapperImage}>
          <Image source={{uri: image}} style={styles.img} />
        </View>
        <View style={styles.wrapperText}>
          {/* <View style={styles.categoryBadge}> */}
          <Text style={styles.textTitle}>{title.substring(0, 30)}</Text>
          {/* </View> */}
          <Text style={styles.textCategory}>{body.substring(0, 70)}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
export default CardPost;
