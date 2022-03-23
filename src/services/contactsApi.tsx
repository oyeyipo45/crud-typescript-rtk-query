import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contact} from "../model/contactModel"


export const contactsApi = createApi({
    reducerPath: "contactApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({
        contacts: builder.query<Contact[], void>({
            query: () => '/contacts'
        })
    })
})


export const { useContactsQuery } = contactsApi