import {StyleSheet} from 'react-native';
// import {theme} from '@theme';
// import {IS_ANDROID} from '@constants';

export const styles = StyleSheet.create({
  tabBarLabelStyle: {
    // fontFamily: theme.fonts.modernMedium,
    fontSize: 12,
    lineHeight: 16,
  },
  tabBarStyle: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderTopWidth: 0,
    elevation: 0,
    height: 75,
    paddingBottom: 0,
  },
  tabBarItemStyle: {
    marginTop: 10,
    height: 50,
  },
  
});
//iPhone without notch mb:25 , and with:0
