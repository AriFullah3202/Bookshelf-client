import React, { useState } from 'react'
import { usePostReviewMutation } from '../redux/api/authAciton';

export const Review = (id) => {
  
    const [review, setReview] = useState('');
    const [updatePost,result] = usePostReviewMutation()
    console.log(id , "for the review")




    const handleReview = (event:any) => {
        event.preventDefault();
      
        // Do something with the review value, such as sending it to the backend
        if(!review){
             console.log("now")
        }
        else{
            const options = {
                data: { review: [review] , book : id.id},
              };
      
        updatePost(options)
    
      }
        setReview('');
      };

  return (
    <form onSubmit={handleReview} className="flex flex-row items-center">
    <textarea
      placeholder="Give a review"
      className="textarea textarea-bordered textarea-lg mb-4 w-full max-w-xs mr-2"
      value={review}
      onChange={(event) => setReview(event.target.value)}
    ></textarea>
    <button type="submit" className="btn btn-accent  border-0">Submit Review</button>
  </form>
  
  )
  
}
