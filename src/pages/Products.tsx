
import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BiBookReader } from 'react-icons/bi';


import { useAddToReadingListMutation, usePostWishListMutation } from "@/redux/features/wishlist/wishlistApi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { IBook } from "../types/bookType";
import { useGetAllBooksQuery, useGetBooksQuery } from "../redux/feature/book/bookSlice";
import { useAppDispatch, useAppSelector } from '../redux/hook';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Genre, setGenre] = useState("");
  const [Year, setYear] = useState(0);


const {user} = useAppSelector(state => state?.auth)

  const { data, error, isLoading } = useGetBooksQuery({ Genre, Year, searchTerm });
  const {data:mainbook,isError,isLoading:bookloading} =  useGetAllBooksQuery(undefined)
  

  
  const HandleSearch = (event: any) => {
    event.preventDefault();
    setSearchTerm(event.target.searchTerm.value);
 
  };
 
  const dispatch = useAppDispatch();
  const handleSingleBook = (book: IBook) => {
    dispatch(addBook(book));
  };

  if (status) {
    toast.success('product deleted successfully');
    dispatch(resetStatus());
  }

  const handleAddWishList  = (book:IBook) =>{
 

    dispatch(addToWishlist(book))
    addWishlist(book)
    if(!wisherror){
      toast.success('book added in wishlist')
    }
    else{
      toast.error('something went wrong')
    }

  }
  const handleAddToReadingList  = (book:IBook) =>{
  
  dispatch(addToReadingList(book))
  addReadingList(book)
  if(!readingerror){
    toast.success('book added in reading list')
  }
  else{
    toast.error('something went wrong')
  }
  }
  
  if (isLoading || bookloading) {
    return (
      <>
       <div className="text-center">
       <span className="loading text-center loading-bar text-white loading-lg"></span>
       </div>

     
      </>
    )
  }








  return (
    <div className="containers mx-auto">
     
      <form action="" onSubmit={HandleSearch}>
        <div className="join flex justify-center flex-row mb-4">
          <div className="max-w-xs">
            <div>
              <input name="searchTerm" className="input input-bordered  join-item" placeholder="Search.." />
            </div>
          </div>
          <select className="select select-bordered join-item" onChange={(e) => setGenre(e.target.value)}>
  <option value="">All Genres</option>
  {mainbook?.data
  ?.map((book: IBook) => book.Genre)
  .filter((genre: string | undefined, index: number, genres: (string | undefined)[]) => genres.indexOf(genre) === index)
  .map((genre: string | undefined, index: number) => (
    <option value={genre} key={index}>
      {genre}
    </option>
  ))}


</select>

<select className="select select-bordered join-item" onChange={(e) => setYear(Number(e.target.value))}>
<option value="">All Year</option>
{Array.from(
                    new Set(
                      mainbook?.data.map((book: IBook) =>
                        new Date(book.PublicationDate!).getFullYear()
                      )
                    )
                  ).map((year) => (
                    <option value={year?.toString()} key={year?.toString()}>
                      {year as number}
                    </option>
                  ))}
</select>

         
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">search here</span>
            <button type="submit" className="btn join-item">Search</button>
          </div>
        </div>
      </form>
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.data?.map((book: IBook) => (
         <div className="card w-96 bg-base-100 shadow-xl">
         <figure>
        <img src="https://l8.nu/rMS1" alt="Shoes" />
      </figure>
          
            <div className="card-body">
              <h2 className="card-title">{book?.title}</h2>
              <p>Books have the power to transport us to new worlds, ignite our imaginations, and inspire us to reach for greatness.</p>
              <p>Genre: {book?.genre}</p>
              <p>Author: {book?.author}</p>
              <p>Published: {book?.publicationDate}</p>
              {
                user?.email &&     <div className="flex justify-around mb-4 mt-4">
                <div className="indicator">
                <span className="indicator-item badge badge-primary">wishlist</span> 
  
  <AiFillHeart  onClick={() => handleAddWishList(book)} size={44} color="white" />
                </div>
                <div className="indicator">
                <span className="indicator-item badge  badge-secondary">readingList</span> 
                <BiBookReader onClick={() => handleAddToReadingList(book)}  size={44} color="white" />
                </div>
        
      </div>
              }
              <div className="card-actions justify-end">
              <Link to={`/book/${book._id}`}>
                          <button onClick={() => handleSingleBook(book)} className="btn btn-primary border-0">view details</button>
                        </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}