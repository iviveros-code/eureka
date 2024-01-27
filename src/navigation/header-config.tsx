import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { theme } from '@theme'
import { moderateScale } from '@helpers'

export const hideHeader = {
  headerShown: false,
}

export const headerConfig = (customTitle?: string) => ({
  headerBackImage: () => (
    <View style={styles.arrow}>
      <Icon name='arrow-back-ios' size={moderateScale(24)} color={theme.colors.black} />
    </View>
  ),
  headerBackTitle: '',
  headerBackTitleStyle: styles.titleHeader,
  headerTitle: customTitle,
  headerTitleStyle: styles.titleHeader,
  headerShadowVisible: false,
  headerTintColor: theme.colors.black,
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
