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
            <NavLink to={`listings/${listing.id}`}>
                <div key={listing.id}>{listing.title}</div>
            </NavLink>
        )
    })

    return (
        <div>
            {listing}
        </div>
    )
}

export default ListingIndexPage;