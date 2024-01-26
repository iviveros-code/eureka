import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { theme } from '@theme'
import { moderateScale } from '@helpers'
import { IS_ANDROID } from '@constants'

export const hideHeader = {
  headerShown: false,
}

export const headerConfig = (customTitle?: string) => ({
  headerBackImage: () => (
    <View style={styles.arrow}>
      <Icon name='arrow-back-ios' size={moderateScale(24)} color={theme.colors.primary_red} />
    </View>
  ),
  headerBackTitle: customTitle || '',
  headerBackTitleStyle: styles.titleHeader,
  headerTitle: IS_ANDROID ? customTitle : '',
  headerTitleStyle: styles.titleHeader,
  headerTransparent: true,
  headerShadowVisible: false,
  headerTintColor: theme.colors.white,
})

const styles = StyleSheet.create({
  arrow: {
    marginHorizontal: theme.general_spacing.md,
  },
  titleHeader: {
    ...theme.fonts.regular,
    fontSize: moderateScale(16),
    fontWeight: '700',
  },
  right: {
    marginRight: theme.general_spacing.lg,
  },
})
