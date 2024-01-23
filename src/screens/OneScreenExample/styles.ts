import {StyleSheet} from 'react-native';

import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {theme} from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleExample: {
    alignSelf: 'center',
  },
  image: {
    width: wp(50),
    height: hp(20),
  },
  title: {
    fontSize: RFPercentage(3),
    fontWeight: '700',
    color: theme.colors.black,
  },
});
