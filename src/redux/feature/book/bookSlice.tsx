import { publicApi } from "../../api/publicApi";

const booksApi   =  publicApi.injectEndpoints({
    endpoints:(builder)=>({
        getBooks:builder.query({
          query: ({ Genre,Year, searchTerm }) => ({
          
            url: '/book',
            method: 'GET',
            params: { Genre, Year, searchTerm },
           
          }),
          
        }),
        getAllBooks:builder.query({
            query:()=>`/book`
              }),
              singleBook: builder.query({
                query: (id) => `/book/${id}`,
              }),
              getAllReview:builder.query({
                query:(id)=>`/reviews/${id}`
                  }),
    
    })
    

})
        
        export const {
            useGetBooksQuery,
            useGetAllBooksQuery,
            useSingleBookQuery,
            useGetAllReviewQuery
          
        } =  booksApi