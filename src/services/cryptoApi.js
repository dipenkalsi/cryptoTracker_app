import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Key': '1ee535b72bmsha4281d7b80d6e13p1ea2e8jsn23e236c90ef1',
   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoApiHeaders})
export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId,timeperiod}) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
        }),
    })
})

export const{
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
}=cryptoApi;