
import { useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSingleBookQuery } from "../redux/feature/book/bookSlice";
import { useAppSelector } from "../redux/hook";

export default function ProductDetails() {
  const review = []
  const {id} = useParams()
  console.log(id, "this is id")

const { data, isLoading, error } = useSingleBookQuery(id);
console.log(data , "data")

const {user} = useAppSelector(state => state?.auth)



const navigate = useNavigate()
console.log(data)

// Inside your component


const handleReview = (event:any) => {}
 

  return (
    <div>
 <ToastContainer/>
<div className="hero min-h-screen ">
  <div className="hero-content gap-8 flex-col lg:flex-row">
    <img
      src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className="flex justify-center">
      <div className="ml-8">
        <h1 className="text-5xl font-bold mb-6">{data?.Title}</h1>
        <p className="mb-4">
          <span className="font-semibold">Genre:</span> {data?.Genre}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Author:</span> {data?.Author}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Published:</span> {data?.PublicationDate}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Reviews:</span>{' '}
          {data?.Reviews?.map((review: string, index: number) => (
            <span key={index} className="mr-2">
              {review},
            </span>
          ))}
        </p>
        <div>
        <form onSubmit={handleReview} className="flex flex-row items-center">
  <textarea
    placeholder="Give a review"
    className="textarea textarea-bordered textarea-lg mb-4 w-full max-w-xs mr-2"
    value={review}
    onChange={(event) => setReview(event.target.value)}
  ></textarea>
  <button type="submit" className="btn btn-accent  border-0">Submit Review</button>
</form>

  </div>
        <div className="flex gap-4">
        {data?.email === user.email && (
  <>
    <label className="btn btn-primary" onClick={handleEdit} htmlFor={`my-modal-${data?._id}`}>Edit</label>
    <button className="btn btn-primary bg-red-500 border-0" onClick={handleDelete}>Delete</button>
  </>
)}

         
        </div>
      </div>
    </div>
  </div>
</div>
{/* {
  modalStatus && <Modal book={data}/>
} */}
    </div>
  )
}