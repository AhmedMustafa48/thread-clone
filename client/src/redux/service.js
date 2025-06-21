import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setMyInfo } from "./slice";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  //    for how much we should keep the data (7days)
  keepUnusedDataFor: 60 * 60 * 24 * 7,
  tagTypes: ["Post", "User", "Me"],
  endpoints: (builder) => ({
    // mutation because we are sending data
    signin: builder.mutation({
      query: (data) => ({
        url: "signin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // After successful signin, refetch user info
          dispatch(serviceApi.util.invalidateTags(["Me"]));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // After successful login, refetch user info
          dispatch(serviceApi.util.invalidateTags(["Me"]));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    myInfo: builder.query({
      query: () => ({
        url: "me",
        method: "GET",
      }),
      providesTags: ["Me"],
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setMyInfo(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useSigninMutation, useLoginMutation, useMyInfoQuery } =
  serviceApi;
