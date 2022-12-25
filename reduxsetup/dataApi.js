import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base = 'http://localhost:5000/'
const dataApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: base,
    prepareHeaders: (headers,{getState}) => {
let token=getState().dataSlice.token
let token2=sessionStorage.getItem('token')
      headers.set("authorization", token?token:token2||'');
      console.log(getState().dataSlice);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/users",
    }),
    getUser: builder.query({
      query: (id) => `/api/user/${id}`,
    }),
    getPosts: builder.query({
      query: () => "/api/posts/",
    }),
    getPost: builder.query({
      query: (id) => `/api/post/${id}`,
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const {
  useLoginMutation,
  useGetUserQuery,
  useGetUsersQuery,
  useGetPostQuery,
  useGetPostsQuery,
} = dataApiSlice;

export default dataApiSlice;
