import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listingsActions from "../../../store/listings";
import * as listingsUtils from "../../../utils/listings_utils"
import FilterBar from "./FilterBar"
import "./index.css";

function ListingsIndex() {
    const dispatch = useDispatch();
    const listings = useSelector(state => Object.values(state.listings))

    useEffect(() => {
        dispatch(listingsActions.fetchListings())
    },[])

    if (!listings) {
        return null;
    }
    
    const listing = listings.map((listing) => {
        return (
            <NavLink className="listings-index-container" to={`listings/${listing.id}`} key={listing.id}>
                <img className="listings-index-image" src={listing.photosUrl[0]} />
                <div className="listings-index-description-container">
                    <div className="listings-index-description">
                        <div className="listings-index-location">
                            {listing.city}, {listing.state}
                        </div>
                        <div className="listings-index-rating">
                            <i className="fa-sharp fa-solid fa-star"></i> 
                            <span>{parseFloat(listing.rating).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="listings-index-title">
                        {listing.title} 
                    </div>
                    <div className="listings-index-price">
                        <span>${listing.price.toLocaleString("en-US")}</span> night
                    </div>
                </div>
            </NavLink>
        )
    })

    return (
        <>
            <div className="listings-index-filter-container">
                <FilterBar />
            </div>
            <div className="listings-index">
                {listing}
            </div>
        </>

    )
}

export default ListingsIndex;