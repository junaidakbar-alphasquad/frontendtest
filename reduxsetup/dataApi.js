import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base = process.env.NEXT_PUBLIC_BASE_URL;
console.log(base)
const dataApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: base,
        prepareHeaders: (headers) => {
            headers.set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6MSwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwibmFtZSI6Im5ldyBuYW1lIiwic3RhdHVzIjp0cnVlfSx7ImlkIjoyLCJlbWFpbCI6Im1haWxAbWFpbC5jb20iLCJuYW1lIjoibmV3IG5hbWUgMTIzIiwic3RhdHVzIjp0cnVlfV0sImlhdCI6MTY3MTc4NzE3NSwiZXhwIjoxNjcxNzkwNzc1fQ.L7ywTFZyzlEN1h2uVV9NHwqS1VbxUEcFzBiGu_Vzzqc')
            console.log(headers)
            return headers
        }
    }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "/users",
        }),
        getUser: builder.query({
            query: id => `/user/${id}`,
        }),
        getPosts: builder.query({
            query: () => "/posts/",
        }),
        getPost: builder.query({
            query: id => `/post/${id}`,
        }),
    })
})
export const {
    useGetUserQuery, useGetUsersQuery, useGetPostQuery, useGetPostsQuery
} = dataApiSlice

export default dataApiSlice;
