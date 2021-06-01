import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

// create a component
const Comment = ({name, body, image}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperImage}>
        <Image source={{uri: image}} style={styles.img} />
      </View>
      <View style={styles.wrapperText}>
        <Text style={styles.textTitle}>{name}</Text>
        <Text style={styles.textComment}>{body}</Text>
      </View>
    </View>
  );
};
export default Comment;
