import React, { useState } from 'react'
import { SafeAreaView, Text, Keyboard, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import { TextInputComponent } from '@components'

import { styles } from './styles'

export const OneScreenExample = () => {
  const [text, setText] = useState('')

  const cleanInput = () => {
    setText('')
  }

  const { t } = useTranslation()

  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: 20 }]}>
      <Text>{t('Home.welcome')}</Text>

      <View style={{ flex: 1, width: '100%' }}>
        <TextInputComponent
          label={'placeholder'}
          value={text}
          onChangeText={setText}
          right={text}
          actionX={cleanInput}
          onSubmitEditing={Keyboard.dismiss}
          keyboardType='default'
          mode='outlined'
          autoFocus={true}
          inlineImageLeft='search_icon'
        />
      </View>
    </SafeAreaView>
  )
}
