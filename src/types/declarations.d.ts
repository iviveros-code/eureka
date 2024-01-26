declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.svg' {
  // eslint-disable-next-line import/order
  import React from 'react'
  // eslint-disable-next-line import/named

  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>
  // eslint-disable-next-line import/no-default-export
  export default content
}

declare module 'theme' {
  import { Theme } from 'react-native-paper/lib/typescript/types'

  const theme: Theme
  export { theme }
}
