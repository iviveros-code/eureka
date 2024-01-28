import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const googleGeocodingApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://maps.googleapis.com' }),
  endpoints: builder => ({
    geocode: builder.query({
      query: ({ latitude, longitude }) => ({
        url: '/maps/api/geocode/json',
        params: {
          latlng: `${latitude},${longitude}`,
          key: 'AIzaSyAqM6mbWYMrxHTo4Qkuw6Kf50UhF0CYyVo',
        },
      }),
    }),
  }),
})

export const { useGeocodeQuery } = googleGeocodingApi
