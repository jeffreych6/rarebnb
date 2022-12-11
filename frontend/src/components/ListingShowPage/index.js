import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listingsActions from "../../store/listings";
import "./ListingShowPage.css";

function ListingShowPage() {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const listing = useSelector(listingsActions.getListing(listingId))

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
                        <img className="listing-show-image" src="https://a0.muscache.com/im/pictures/miso/Hosting-47439349/original/1d544ac2-d523-405b-a821-f09d802c7a09.jpeg?im_w=1200"></img>
                    </div>

                    <div className="listing-show-details-container">
                        <div className="listing-show-details">
                            <div className="listing-show-details-title-container">
                                <div className="listing-show-details-title">
                                    <h1>{listing.title}</h1>
                                    <h2>{listing.guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.baths} baths</h2>
                                </div>
                                <div className="listing-show-details-title-image">
                                    <i className="fa-solid fa-user-circle" />
                                </div>
                            </div>
                        </div>

                        <div className="listing-show-reservations-container">
                            Reservations
                        </div>
                    </div>

                    <br />
                    {listing.description}
                    <br />
                    {listing.price}
                    <br />
                    {listing.city}
                    <br />
                    {listing.state}
                    <br />
                    {listing.country}
                    <br />
                    {listing.guests}
                    <br />
                    {listing.bedrooms}
                    <br />
                    {listing.beds}
                    <br />
                    {listing.baths}
                </div>
            )}
        </>
    )
}

export default ListingShowPage;