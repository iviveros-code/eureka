import { Modal, View } from 'react-native'

import { globalStyles } from '@theme'

import { styles } from './styles'

export const CustomModal = ({
  visible,
  children,
}: {
  visible: boolean
  children?: React.ReactNode
}) => {
  return (
    <Modal animationType='slide' transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={globalStyles.flex}>{children}</View>
        </View>
      </View>
    </Modal>
  )
}
