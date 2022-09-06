import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerEmptyState: {top: 200},
  emptyText: {
    fontWeight: '600',
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 400,
    left: 50,
  },
  scroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
