import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: 22,
    borderBottomWidth: 1,
    paddingBottom: 24,
    borderBottomColor: '#efefef',
  },
  bodyContainer: {
    paddingHorizontal: 18,
  },
  categoryBadge: {
    paddingHorizontal: 18,
    backgroundColor: '#E6F6F4',
    alignSelf: 'flex-start',
    borderRadius: 50,
    paddingVertical: 4,
    marginBottom: 8,
  },
  textTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1C1F3F',
  },
  textCategory: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#1C1F3F',
  },
  wrapper: {
    flexDirection: 'row',
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  wrapperImage: {
    marginRight: 18,
  },
  wrapperText: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
