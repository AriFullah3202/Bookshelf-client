import React from 'react'

export const Review = (id) => {
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
