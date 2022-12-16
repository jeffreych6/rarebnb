import React from "react";
import "./Reviews.css"
import profile from "../../assets/profiles/profile.webp"


function Reviews({ listing }) {

    const averageRating = (listingReviews) => {
        let totalRating = 0

        listingReviews.forEach((review) => {
            totalRating += review.rating
        })

        return totalRating / listingReviews.length
    }

    const averageCleanliness = (listingReviews) => {
        let totalRating = 0

        listingReviews.forEach((review) => {
            totalRating += review.cleanliness
        })

        return totalRating / listingReviews.length
    }

    const averageAccuracy = (listingReviews) => {
        let totalRating = 0

        listingReviews.forEach((review) => {
            totalRating += review.accuracy
        })

        return totalRating / listingReviews.length
    }

    const averageCommunication = (listingReviews) => {
        let totalRating = 0

        listingReviews.forEach((review) => {
            totalRating += review.communication
        })

        return totalRating / listingReviews.length
    }

    const averageLocation = (listingReviews) => {
        let totalRating = 0

        listingReviews.forEach((review) => {
            totalRating += review.location
        })

        return totalRating / listingReviews.length
    }

    const averageCheckIn = (listingReviews) => {
        let totalRating = 0

        listingReviews.forEach((review) => {
            totalRating += review.checkIn
        })

        return totalRating / listingReviews.length
    }

    const averageValue = (listingReviews) => {
        let totalRating = 0

        listingReviews.forEach((review) => {
            totalRating += review.value
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

    const reviewContent = displayedReviews(listing.reviews).map((review) => {

        return (
            <div key={review.id} className="review-content">
                <div className="review-author">
                    <img src={review.photoUrl}></img>
                    <div className="review-author-info">
                        <span>{review.firstName}</span>
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
            <h1><i className="fa-sharp fa-solid fa-star"></i>  {averageRating(listing.reviews).toFixed(2)} · {listing.reviews.length} {listing.reviews.length > 1 ? "reviews" : "review"}</h1>
            <div className="reviews-grid-ratings">
                <div className="reviews-grid-ratings-container">
                    <div className="reviews-grid-ratings-content">
                        <div className="reviews-grid-type">
                            <h1>Cleanliness</h1>
                        </div>
                        <div className="reviews-grid-value">
                            <div className="reviews-grid-rating-bar">
                                <span style={{width: `${(averageCleanliness(listing.reviews)/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageCleanliness(listing.reviews).toFixed(1)}</h1>
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
                                <span style={{width: `${(averageAccuracy(listing.reviews)/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageAccuracy(listing.reviews).toFixed(1)}</h1>
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
                                <span style={{width: `${(averageCommunication(listing.reviews)/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageCommunication(listing.reviews).toFixed(1)}</h1>
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
                                <span style={{width: `${(averageLocation(listing.reviews)/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageLocation(listing.reviews).toFixed(1)}</h1>
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
                                <span style={{width: `${(averageCheckIn(listing.reviews)/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageCheckIn(listing.reviews).toFixed(1)}</h1>
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
                                <span style={{width: `${(averageValue(listing.reviews)/5)*100}%`}}>.</span>
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageValue(listing.reviews).toFixed(1)}</h1>
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