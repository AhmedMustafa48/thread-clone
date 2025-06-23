import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addMyInfo } from "./slice";

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
      invalidateTags: ["Me"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
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
          dispatch(addMyInfo(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    logoutMe: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});

export const {
  useSigninMutation,
  useLoginMutation,
  useMyInfoQuery,
  useLogoutMeMutation,
} = serviceApi;
