import React from "react";
import "./Reviews.css"
import profile from "../../assets/profile.webp"


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

    const reviewContent = listing.reviews.map((review) => {

        return (
            <div className="review-content">
                <div className="review-author">
                    <img src={profile}></img>
                    <div>
                        {review.firstName}
                        <br/>
                        December, 2022
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
            <h1><i className="fa-sharp fa-solid fa-star"></i>  {averageRating(listing.reviews)} · {listing.reviews.length} {listing.reviews.length > 1 ? "reviews" : "review"}</h1>
            <div className="reviews-grid-ratings">
                <div className="reviews-grid-ratings-container">
                    <div className="reviews-grid-ratings-content">
                        <div className="reviews-grid-type">
                            <h1>Cleanliness</h1>
                        </div>
                        <div className="reviews-grid-value">
                            <div>
                            ------
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageCleanliness(listing.reviews)}</h1>
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
                            <div>
                            ------
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageAccuracy(listing.reviews)}</h1>
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
                            <div>
                                ------
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageCommunication(listing.reviews)}</h1>
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
                            <div>
                                ------
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageLocation(listing.reviews)}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reviews-grid-ratings-container">
                    <div className="reviews-grid-ratings-content">
                        <div className="reviews-grid-type">
                            <h1>Check</h1>
                        </div>
                        <div className="reviews-grid-value">
                            <div>
                                ------
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageCheckIn(listing.reviews)}</h1>
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
                            <div>
                                ------
                            </div>
                            <div className="reviews-grid-ratings-average">
                                <h1>{averageValue(listing.reviews)}</h1>
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