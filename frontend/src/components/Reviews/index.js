import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as reviewsActions from "../../store/reviews";
import "./index.css"


function Reviews({ listing, listingId }) {
    const dispatch = useDispatch();
    const reviews = useSelector(reviewsActions.getReviews)
    
    useEffect(() => {
        dispatch(reviewsActions.fetchReview(listingId))
    }, [])

    const averageRating = (listingReviews, attribute) => {
        let totalRating = 0
        listingReviews.forEach((review) => {
            totalRating += review[attribute]
        })

        return totalRating / listingReviews.length
    }

    const displayedReviews = (reviews) => {
        const reviewsArray = []

        for (let i = 0; i < 6 && i < reviews.length; i++) {
            reviewsArray.push(reviews[i])
        }

        return reviewsArray
    }

    const month = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    };

    const reviewContent = displayedReviews(reviews).map((review) => {

        return (
            <div key={review.id} className="review-content">
                <div className="review-author">
                    {/* <img src={review.photoUrl}></img> */}
                    <i id="profile-icon" className="fa-solid fa-user-circle" />
                    <div className="review-author-info">
                        <span>{review.authorName}</span>
                        <h2>{month[review.reviewDate.slice(5, 7)]} {review.reviewDate.slice(0,4)}</h2>
                    </div>
                </div>
                <div className="review-comment">
                    {review.review}
                </div>
            </div>
        )
    })

    return (
        <div className="reviews-container">
            <h1><i className="fa-sharp fa-solid fa-star"></i>  {parseFloat(listing.rating).toFixed(2)} · {reviews.length} {reviews.length === 1 ? "review" : "reviews"}</h1>

            <div className="reviews-grid-ratings">
                <div className="reviews-grid-ratings-container">
                    <div className="reviews-grid-ratings-content">
                        <div className="reviews-grid-type">
                            <h1>Cleanliness</h1>
                        </div>
                        <div className="reviews-grid-value">
                            <div className="reviews-grid-rating-bar">
                                <span style={{width: `${(averageRating(reviews, "cleanliness")/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageRating(reviews, "cleanliness").toFixed(1)}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reviews-grid-ratings-container">
                    <div className="reviews-grid-ratings-content">
                        <div className="reviews-grid-type">
                            <h1>Accuracy</h1>
                        </div>
                        <div className="reviews-grid-value">
                            <div className="reviews-grid-rating-bar">
                                <span style={{width: `${(averageRating(reviews, "accuracy")/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageRating(reviews, "accuracy").toFixed(1)}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reviews-grid-ratings-container">
                    <div className="reviews-grid-ratings-content">
                        <div className="reviews-grid-type">
                            <h1>Communication</h1>
                        </div>
                        <div className="reviews-grid-value">
                            <div className="reviews-grid-rating-bar">
                                <span style={{width: `${(averageRating(reviews, "communication")/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageRating(reviews, "communication").toFixed(1)}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reviews-grid-ratings-container">
                    <div className="reviews-grid-ratings-content">
                        <div className="reviews-grid-type">
                            <h1>Location</h1>
                        </div>
                        <div className="reviews-grid-value">
                            <div className="reviews-grid-rating-bar">
                                <span style={{width: `${(averageRating(reviews, "location")/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageRating(reviews, "location").toFixed(1)}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reviews-grid-ratings-container">
                    <div className="reviews-grid-ratings-content">
                        <div className="reviews-grid-type">
                            <h1>Check-in</h1>
                        </div>
                        <div className="reviews-grid-value">
                            <div className="reviews-grid-rating-bar">
                                <span style={{width: `${(averageRating(reviews, "checkIn")/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageRating(reviews, "checkIn").toFixed(1)}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reviews-grid-ratings-container">
                    <div className="reviews-grid-ratings-content">
                        <div className="reviews-grid-type">
                            <h1>Value</h1>
                        </div>
                        <div className="reviews-grid-value">
                            <div className="reviews-grid-rating-bar">
                                <span style={{width: `${(averageRating(reviews, "value")/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageRating(reviews, "value").toFixed(1)}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviews-grid-comments">
                {reviewContent}
            </div>
    </div>
    )
}

export default Reviews;