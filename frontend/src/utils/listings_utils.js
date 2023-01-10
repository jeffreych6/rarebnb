export const averageRating = (listingReviews) => {
    let totalRating = 0

    listingReviews.forEach((review) => {
        totalRating += review.rating
    })

    return totalRating / listingReviews.length
}

    // const dropLastDigit = (rating) => {

    //     if (parseInt(rating[rating.length-1]) === 0) {
    //         return rating.toFixed[1]
    //     }

    // }