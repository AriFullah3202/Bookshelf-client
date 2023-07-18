/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: 'http://127.0.0.1:5000/',
    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.userToken
      if (token) {
        console.log("this is token form authPi", token)
       // include token in req header
        headers.set('authorization', `${token}`)  
        return headers
      }
    },
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: 'api/v1/users/my-profile',
        method: 'GET',
      }),
    }),
    postReview: builder.mutation({
      query: ( {data} ) => ({
        url: `api/v1/reviews/`,
        method: 'POST',
        body: data,
      }),
    })
  })
})
export const { useGetUserDetailsQuery , usePostReviewMutation} = authApi
