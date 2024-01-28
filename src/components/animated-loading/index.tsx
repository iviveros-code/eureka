import { useEffect, useRef } from 'react'
import { Animated, Easing, View, Image } from 'react-native'

import { Images } from '@constants'

import { styles } from './styles'

export const AnimatedLoading = () => {
  const rotation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    startAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start()
  }

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]} />
        <View style={styles.image}>
          <Image style={styles.image} source={Images.General.Logo} />
        </View>
      </View>
    </View>
  )
}
