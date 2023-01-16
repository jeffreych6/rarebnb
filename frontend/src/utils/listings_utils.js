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

export const calculateDays = (startDate, endDate) => {
    return (Date.parse(endDate) - Date.parse(startDate)) / (1000 * 3600 * 24)
  }

export const calculateEndDate = (startDate, days) => {
    const date = new Date(Date.parse(startDate) + (days * 1000 * 3600 * 24))
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    if (month > 12) {
      month = month % 12
    }

    return (`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`)
  }