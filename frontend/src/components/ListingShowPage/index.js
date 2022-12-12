import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listingsActions from "../../store/listings";
import "./ListingShowPage.css";

function ListingShowPage() {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const listing = useSelector(listingsActions.getListing(listingId))

    const titleize = (word) => {
        return word[0].toUpperCase() + word.slice(1)
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
                            <i className="fa-sharp fa-solid fa-star"></i> 5.0 · 
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
                                    <h1>{titleize(listing.propertyType)} hosted by {listing.firstName} HomeServices</h1>
                                    <h2>{listing.guests} {listing.guests > 1 ? "guests" : "guest"} · {listing.bedrooms} {listing.bedrooms > 1 ? "bedrooms" : "bedroom"} · {listing.beds} {listing.beds > 1 ? "beds" : "bed"} · {listing.baths} {listing.baths > 1 ? "baths" : "bath"}</h2>
                                </div>
                                <div className="listing-show-details-title-image">
                                    <img src="https://a0.muscache.com/im/pictures/user/31db696d-ead3-4f95-beaa-31e75c79172c.jpg?aki_policy=profile_large"></img>
                                </div>
                            </div>

                            <div className="listing-show-details-description">
                                {listing.description}
                            </div>

                            <div className="listing-show-details-amenities">
                                <h1>What this place offers</h1>
                                <div className="listing-show-details-amenities-list">
                                    {listing.kitchen && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <i className="fa-thin fa-utensils"></i> Kitchen
                                            </div>
                                    )}
                                    {listing.wifi && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <i className="fa-light fa-wifi"></i> Wifi
                                        </div>
                                    )}
                                    {listing.parking && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <i className="fa-regular fa-car"></i> Parking
                                        </div>
                                    )}
                                    {listing.airCon && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <i className="fa-light fa-snowflake" /> Air Conditioning
                                        </div>
                                    )}
                                    {listing.washer && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <i className="fa-regular fa-washing-machine"></i> Washer
                                        </div>
                                    )}
                                    {listing.pets && (
                                        <div className="listing-show-details-amenities-list-item">
                                            <i className="fa-thin fa-paw-simple"></i> Pets allowed
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                        <div className="listing-show-reservations-container">
                            Reservations
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ListingShowPage;