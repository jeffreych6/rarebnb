export const averageRating = (listingReviews) => {
    let totalRating = 0

    listingReviews.forEach((review) => {
        totalRating += review.rating
    })

    return totalRating / listingReviews.length
}

export const titleize = (word) => {
    return word[0].toUpperCase() + word.slice(1)
}

    // const dropLastDigit = (rating) => {

    //     if (parseInt(rating[rating.length-1]) === 0) {
    //         return rating.toFixed[1]
    //     }

    // }