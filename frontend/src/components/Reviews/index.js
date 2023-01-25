import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as reviewsActions from "../../store/reviews";
import "./index.css"

function Reviews({ listing, listingId }) {
    const dispatch = useDispatch();
    const reviews = useSelector(reviewsActions.getReviews)
    reviews.sort((a, b) => (a.reviewDate < b.reviewDate) ? 1 : -1)

    useEffect(() => {
        dispatch(reviewsActions.fetchReview(listingId))
    }, [])

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

    const attributes = ["cleanliness", "accuracy", "communication", "location", "checkIn", "value"]
    
    const averageRating = (listingReviews, attribute) => {
        let totalRating = 0
        listingReviews.forEach((review) => {
            totalRating += review[attribute]
        })

        return totalRating / listingReviews.length
    }

    const titleize = (word) => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ'
        let title = ""

        for (let i = 0; i < word.length; i++) {
            if (letters.includes(word[i])) {
                title += "-" + word[i].toLowerCase()
            } else {
                title += word[i]
            }
        }

        return title[0].toUpperCase() + title.slice(1)
    }

    const displayedReviews = (reviews) => {
        const reviewsArray = []

        for (let i = 0; i < 6 && i < reviews.length; i++) {
            reviewsArray.push(reviews[i])
        }

        return reviewsArray
    }

    const attributeRatings = attributes.map((attribute) => {
        return (
            <div className="reviews-grid-ratings-content" key={attribute}>
                <div className="reviews-grid-type">{titleize(attribute)}</div>
                <div className="reviews-grid-value">
                    <div className="reviews-grid-rating-bar">
                        <span style={{width: `${(averageRating(reviews, attribute)/5)*100}%`}}>.</span>
                    </div>
                    <div className="reviews-grid-ratings-average">{averageRating(reviews, attribute).toFixed(1)}</div>
                </div>
            </div>
        )
    })

    const reviewContent = displayedReviews(reviews).map((review) => {
        return (
            <div key={review.id} className="review-content">
                <div className="review-author">
                    <img src={review.photoUrl} alt="profile"/>
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
                {attributeRatings}
            </div>
            <div className="reviews-grid-comments">
                {reviewContent}
            </div>
    </div>
    )
}

export default Reviews;