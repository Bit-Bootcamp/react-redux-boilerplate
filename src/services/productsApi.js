// API definition file
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://serene-eyrie-59879.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/categories`,
    }),
    getCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
    }),
    registerUser: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (data) => ({
        url: `/register`,
        method: "POST",
        body: data,
      }),
      
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useRegisterUserMutation,
} = productsApi;
