import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
const cryptoNewHeaderrs = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '6eab08ff1bmsh13727dfd64ece5ep1db363jsn815173b65349'
};
const createRequest = (url) => ({ url, heders: cryptoNewHeaderrs });
export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://bing-news-search1.p.rapidapi.com/news",
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => {
                createRequest(`/news/search?q=${newsCategory}
          &safeSearch==Off&textFormat=Raw&freshness=Day&count=${count}
                `)
            },
        }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;