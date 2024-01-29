import Config from 'react-native-config'

export const EnvConfig = {
  APP_CONFIG: Config.APP_CONFIG ?? '',
  API_URL: Config.API_URL ?? '',
  API_KEY: Config.API_KEY ?? '',
  DEV_APP_ID: Config.DEV_APP_ID ?? '',
  STG_APP_ID: Config.STG_APP_ID ?? '',
  PROD_APP_ID: Config.PROD_APP_ID ?? ''
}
