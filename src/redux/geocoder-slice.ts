import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from 'react-native-config'

export const googleGeocodingApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
  endpoints: builder => ({
    geocode: builder.query({
      query: ({ latitude, longitude }) => ({
        url: '/maps/api/geocode/json',
        params: {
          latlng: `${latitude},${longitude}`,
          key: Config.API_KEY,
        },
      }),
    }),
  }),
})

export const { useGeocodeQuery } = googleGeocodingApi
