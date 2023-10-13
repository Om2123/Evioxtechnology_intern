import { useState } from 'react';
import React, { useEffect } from 'react'
import { addNewReview, getComments } from '../../firebase/reviewsDb';

export default function Reviews(props) {
    const [reviews, setReviews] = useState();
    const [showReviews, setShowReviews] = useState(false);
    const [newReview, setNewReview] = useState("");

    useEffect(() => {
        getComments(props.title).then((res) => {
            setReviews(res);
        })
        //eslint-disable-next-line
    }, [showReviews]) 

    const addNewReviews = () => {
        addNewReview(props.title, newReview);
    }
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

            {/* Review Input */}
            <div className="mb-4">
                <textarea
                    rows="4"
                    cols="50"
                    className="w-full p-2 border rounded"
                    placeholder="Write a review..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                ></textarea>
            </div>
            <div className="flex justify-between">

                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={addNewReviews}
                >
                    Submit Review
                </button>

                {/* Show Other Reviews Button */}
                <button
                    onClick={() => setShowReviews(!showReviews)}
                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded mt-4"
                >
                    {showReviews ? 'Hide Other Reviews' : 'Show Other Reviews'}
                </button>

            </div>
            {/* Display Reviews */}
            <div className="mt-4">
                {showReviews &&
                    reviews.map((review, index) => (
                        <div key={index} className="bg-gray-100 p-2 rounded mb-2 text-gray-800 text-lg">
                            {review.fields.review.stringValue}
                        </div>
                    ))}
            </div>
        </div>
    )
}
