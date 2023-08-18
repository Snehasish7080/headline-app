import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type loginBody = {
  mobile: string;
};

export const authApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:3000/auth'}),
  tagTypes: ['Auth'],
  endpoints: build => ({
    login: build.mutation<loginBody, loginBody>({
      query: body => ({
        url: '/login',
        method: 'Post',
        body,
      }),
    }),
  }),
});

export const {useLoginMutation} = authApi;
