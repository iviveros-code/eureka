declare module 'react-native-config' {
  export interface NativeConfig {
    APP_CONFIG: string
    DEV_APP_ID?: string
    STG_APP_ID?: string
    PROD_APP_ID?: string
    API_URL: string
    API_KEY: string
  }

  export const Config: NativeConfig
  // eslint-disable-next-line import/no-default-export
  export default Config
}
