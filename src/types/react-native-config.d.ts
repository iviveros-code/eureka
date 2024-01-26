declare module 'react-native-config' {
  export interface NativeConfig {
    APP_CONFIG: string
    APP_ID: string
    API_URL: string
  }

  export const Config: NativeConfig
  // eslint-disable-next-line import/no-default-export
  export default Config
}
