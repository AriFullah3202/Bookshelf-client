
import { Link } from 'react-router-dom';
import { useGetAllBooksQuery } from '../redux/feature/book/bookSlice';
import { useAppDispatch } from '../redux/hook';
import { IBook } from '../types/bookType';




export default function Home() {
  const dispatch =  useAppDispatch()
  const { data:result, error, isLoading } = useGetAllBooksQuery(undefined)
  const handleSingleBook = (book: IBook) => {
    dispatch(addBook(book));
  };
  console.log(isLoading)

  console.log(result)
  let sortedData: IBook[] = [];
  if (result?.data) {
    sortedData = [...result.data].sort((a, b) => {
      const dateA = new Date(a.publicationDate);
      const dateB = new Date(b.publicationDate);
      return dateB.getTime() - dateA.getTime();
    });
  }
  if(isLoading){
    <>
     <span className="loading loading-bars text-white loading-lg"></span>
      <p>loading</p>
    </>
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       
    {sortedData?.map((book: IBook) => (
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
        <div className="card-actions justify-end">
        <Link to={`/book/${book._id}`}>
                    <button onClick={() => handleSingleBook(book)} className="btn btn-primary border-0">view details</button>
                  </Link>
        </div>
      </div>
    </div>
    ))}
  </div>
  )
}