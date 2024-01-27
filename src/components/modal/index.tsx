import { Modal, View, Text } from 'react-native'
import { Button } from '../button'
import { styles } from './styles'
import { globalStyles } from '@theme'
export const CustomModal = ({
  visible,
  title,
  textButtonPrimary,
  textButtonSecondary,
  functionPrimary,
  functionSecondary,
  children,
}: {
  visible: boolean
  title?: string
  textButtonPrimary?: string
  textButtonSecondary?: string
  functionPrimary?: () => void
  functionSecondary?: () => void
  children?: React.ReactNode
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text>{title}</Text>
          <View style={styles.buttonsContainer}>
            <Button
              mode="outlined"
              title={textButtonPrimary}
              onPress={functionPrimary}
            />
            <Button
              mode="outlined"
              title={textButtonSecondary}
              onPress={functionSecondary}
            />
          </View>
          <View style={globalStyles.flex}>{children}</View>
        </View>
      </View>
    </Modal>
  )
}
