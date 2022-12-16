import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listingsActions from "../../store/listings";
import ReservationForm from "../ReservationForm"
import MapContainer from "../MapContainer"
import Reviews from "../Reviews"
import "./ListingShowPage.css";
import airCon from "../../assets/amenities/airCon.png"
import kitchen from "../../assets/amenities/kitchen.png"
import parking from "../../assets/amenities/parking.png"
import pets from "../../assets/amenities/pets.png"
import washer from "../../assets/amenities/washer.png"
import wifi from "../../assets/amenities/wifi.png"
import profile from "../../assets/profiles/profile.webp"
import aircover from "../../assets/amenities/aircover.png"

function ListingShowPage() {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const listing = useSelector(listingsActions.getListing(listingId))

    const titleize = (word) => {
        return word[0].toUpperCase() + word.slice(1)
    }

    const averageRating = (listingReviews) => {
        let totalRating = 0

        listingReviews.forEach((review) => {
            totalRating += review.rating
        })

        return totalRating / listingReviews.length
    }

    useEffect(() => {
        dispatch(listingsActions.fetchListing(listingId))
    },[listingId])

    return (
        <>
            {listing && (
                <div className="listing-show-container">
                    <div className="listing-show-header-title-container">
                        <div className="listing-show-header-title">
                            <h1>{listing.title}</h1>
                        </div>
                        <div className="listing-show-header-description">
                            <i className="fa-sharp fa-solid fa-star"></i> {averageRating(listing.reviews).toFixed(2)} · 
                            <span>{listing.city}, {listing.state}, {listing.country}</span>
                        </div>
                    </div>

                    <div className="listing-show-images-container">

                            <img className="listing-show-image-large" src={listing.photosUrl[0]}></img>

                        <div className="listing-show-image-small-container">
                            <img className="listing-show-image-small" src={listing.photosUrl[1]}></img>
                            <img id="image-2" className="listing-show-image-small" src={listing.photosUrl[2]}></img>
                            <img className="listing-show-image-small" src={listing.photosUrl[3]}></img>
                            <img id="image-4" className="listing-show-image-small" src={listing.photosUrl[4]}></img>
                        </div>
                    </div>

                    <div className="listing-show-details-container">
                        <div className="listing-show-details">
                            <div className="listing-show-details-title-container">
                                <div className="listing-show-details-title">
                                    <h1>{titleize(listing.propertyType)} hosted by {listing.firstName} {listing.lastName}</h1>
                                    <h2>{listing.guests} {listing.guests > 1 ? "guests" : "guest"} · {listing.bedrooms} {listing.bedrooms > 1 ? "bedrooms" : "bedroom"} · {listing.beds} {listing.beds > 1 ? "beds" : "bed"} · {listing.baths} {listing.baths > 1 ? "baths" : "bath"}</h2>
                                </div>
                                <div className="listing-show-details-title-image">
                                    <img src={listing.photoUrl}></img>
                                </div>
                            </div>

                            <div className="listing-show-aircover">
                                <img src={aircover}/>
                                <h1>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</h1>
                            </div>

                            <div className="listing-show-details-description">
                                {listing.description}
                            </div>

                            <div className="listing-show-details-amenities">
                                <h1>What this place offers</h1>
                                <div className="listing-show-details-amenities-list">
                                    {listing.kitchen && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <img src={kitchen} />Kitchen
                                            </div>
                                    )}
                                    {listing.wifi && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <img src={wifi} /> Wifi
                                        </div>
                                    )}
                                    {listing.parking && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <img src={parking} /> Parking
                                        </div>
                                    )}
                                    {listing.airCon && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <img src={airCon} /> Air Conditioning
                                        </div>
                                    )}
                                    {listing.washer && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <img src={washer} /> Washer
                                        </div>
                                    )}
                                    {listing.pets && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <img src={pets}/>Pets allowed
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                        <div className="listing-show-reservations-container">
                            <div className="listing-show-reservations-form">
                                <ReservationForm listing={listing} rating={averageRating(listing.reviews)} />
                            </div>
                        </div>
                    </div>

                    <div className="listing-show-reviews-container">
                        <Reviews listing={listing} />
                    </div>
                    
                    <div className="listing-show-map-container">
                        <h1>Where you'll be</h1>
                        <MapContainer listing={listing} />
                        <h2>{listing.city}, {listing.state}, {listing.country}</h2>
                    </div>
                </div>
            )}
        </>
    )
}

export default ListingShowPage;