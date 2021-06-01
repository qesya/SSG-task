import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1C1F3F',
  },
  textComment: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1C1F3FAA',
    marginTop: 4,
  },
  wrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  img: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  wrapperImage: {
    marginRight: 18,
  },
  wrapperText: {
    flex: 1,
    flexWrap: 'wrap',
  },
});
