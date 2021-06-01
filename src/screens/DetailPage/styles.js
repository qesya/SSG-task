import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
    backgroundColor: '#ffffff',
  },
  bodyContainer: {
    paddingHorizontal: 18,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#1C1F3F',
    marginBottom: 18,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 26,
  },
  categoryBadge: {
    paddingHorizontal: 18,
    backgroundColor: '#E6F6F4',
    alignSelf: 'flex-start',
    borderRadius: 50,
    paddingVertical: 4,
    marginBottom: 4,
  },
  wrapperInfo: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCategory: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#1C1F3F',
  },
  textTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#1C1F3F',
    marginTop: 18,
  },
  textDesc: {
    marginTop: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#1C1F3FAA',
  },
  divider: {
    marginVertical: 20,
    width: '100%',
    height: 1,
    backgroundColor: '#efefef',
  },
  textComment: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#1C1F3F',
    marginBottom: 14,
  },
  wrapperCommentInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
