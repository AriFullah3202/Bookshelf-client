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
    
    })
    

})
        
        export const {
            useGetBooksQuery,
            useGetAllBooksQuery
          
        } =  booksApi