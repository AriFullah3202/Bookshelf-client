
import { useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetAllBooksQuery, useGetAllReviewQuery, useSingleBookQuery } from "../redux/feature/book/bookSlice";
import { useAppSelector } from "../redux/hook";
import { Review } from "../components/Review";

export default function ProductDetails() {
  const {id} = useParams()
  console.log(id, "this is id")

const { data, isLoading, error } = useSingleBookQuery(id);
console.log(data , "data")

const {user} = useAppSelector(state => state?.auth)
console.log(data?.data?.user?.email , "====" , user.email)

console.log(data)
// fro reviews
const review  = useGetAllReviewQuery(id)
console.log(review?.data?.data, "this is review")

console.log(data)

const handleEdit = {}
const handleDelete = {}

 

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
        <h1 className="text-5xl font-bold mb-6">{data?.data?.title}</h1>
        <p className="mb-4">
          <span className="font-semibold">Genre:</span> {data?.data?.genre}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Author:</span> {data?.data?.author}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Published:</span> {data?.data?.publicationDate}
        </p>
        <p className="mb-4">
        {review?.data?.data?.review && (
  <div>
    <span className="font-semibold">Reviews:</span>
    {review?.data?.data?.review.map((comment, index) => (
      <p key={index}>{comment}</p>
    ))}
  </div>
)}
          
        </p>
        <div>
      
  </div>
        <div className="flex gap-4">
        {data?.data?.user?.email === user?.email && (
  <>
    <label className="btn btn-primary" onClick={handleEdit} htmlFor={`my-modal-${data?._id}`}>Edit</label>
    <button className="btn btn-primary bg-red-500 border-0" onClick={handleDelete}>Delete</button>
  </>
)}

        </div>
         <Review id = {id}></Review>
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