import React, { forwardRef } from 'react'
import { TextInput } from 'react-native-paper'

import { theme } from '@theme'

import { styles } from './styles'

interface Props {
  right?: React.ReactNode
  secureTextEntry?: boolean
  actionX?: () => void
  [key: string]: any
}

export const TextInputComponent = forwardRef(({ right, secureTextEntry, actionX, ...rest }: Props, ref: any) => {
  return (
    <TextInput
      ref={ref}
      style={styles.input}
      mode='outlined'
      secureTextEntry={secureTextEntry}
      activeOutlineColor={theme.colors.primary_black}
      outlineColor={theme.colors.secondary_black}
      selectionColor={theme.colors.secondary_black}
      textColor={theme.colors.primary_black}
      outlineStyle={styles.outlineStyle}
      theme={{
        colors: {
          primary: theme.colors.placeholder,
          text: theme.colors.primary_black,
          placeholder: theme.colors.placeholder,
          onSurfaceVariant: theme.colors.primary_black,
        },
        roundness: theme.spacing.sm,
      }}
      right={
        right && (
          <TextInput.Icon
            size={20}
            onPress={actionX}
            icon={secureTextEntry ? 'eye' : 'close'}
            iconColor={theme.colors.primary_green_dark}
          />
        )
      }
      {...rest}
    />
  )
})
