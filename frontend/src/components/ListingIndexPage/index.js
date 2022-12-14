import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listingsActions from "../../store/listings";
import "./ListingIndexPage.css";

function ListingIndexPage() {
    const dispatch = useDispatch();
    const listings = useSelector(state => Object.values(state.listings))
    
    useEffect(() => {
        dispatch(listingsActions.fetchListings())
    },[])

    const listing = listings.map((listing) => {
        return (
            <>
                {listings && (
                    <NavLink className="listing-index-links" to={`listings/${listing.id}`} key={listing.id}>
                        <div className="listing-index-container">
                            <div className="listing-index-image-container">
                                <img className="listing-index-image" src={listing.photosUrl[0]} />
                            </div>

                            <div className="listing-index-description-container">
                                <div className="listing-index-title">
                                    <div className="listing-index-location">
                                        {listing.city}, {listing.state}
                                    </div>
                                    <div className="listing-index-rating">
                                        <i className="fa-sharp fa-solid fa-star"></i> 5.0
                                    </div>
                                </div>
                                <div className="listing-index-description">
                                    {listing.title}
                                </div>
                                <div className="listing-index-description">
                                    {listing.beds} {listing.beds > 1 ? "beds" : "bed"} · {listing.baths} {listing.baths > 1 ? "baths" : "bath"}
                                </div>
                                <div className="listing-index-price">
                                    <span className="listing-index-description-styles">${listing.price}</span> night
                                </div>
                            </div>
                        </div>
                    </NavLink>
                )}
            </>
        )
    })

    return (
        <>
            <div className="filter-bar"></div>
            <div className="listing-index">
                {listing}
            </div>
        </>

    )
}

export default ListingIndexPage;