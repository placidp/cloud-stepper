import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FormData } from '../../shared/types/formDataTypes'

export const formApi = createApi({
    reducerPath: 'formApi',
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://api.sbercloud.ru' }),
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        sendData: builder.mutation({
            query: (payload: FormData) => ({
                // url: 'content/v1/bootcamp/frontend',
                url: '/posts',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
})

export const { useSendDataMutation } = formApi
