import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
  },
  galleryContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  gallery: {
    backgroundColor: '#00cec9',
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  button: {
    backgroundColor: '#636e72',
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    fontSize: 20,
    fontWeight: '400',
    color: '#dfe6e9',
  },
  containerEmptyState: {top: 20},
  emptyText: {
    fontWeight: '600',
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
  },
  containerCards: {
    flex: 1,
  },
  scroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  containerPhoto: {
    margin: 10,
  },
  photos: {
    width: 100,
    height: 100,
  },
});
