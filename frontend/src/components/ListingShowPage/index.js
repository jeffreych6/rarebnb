import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listingsActions from "../../store/listings";
import "./ListingShowPage.css";

function ListingShowPage() {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    // const listing = useSelector((listingId) => (state) => state.listings[listingId])
    const listing = useSelector(listingsActions.getListing(listingId))

    // const listing = useSelector(listingsActions.getListing(listingId))
    // console.log('listing',listing)
    // console.log(listing[listingId])
    useEffect(() => {
        dispatch(listingsActions.fetchListing(listingId))
    },[listingId])
    debugger
    return (
        <div>
            {/* {listingId}  */}
            {listing && listing.title}
            <br />
            {listing && listing.description}
            <br />
            {listing && listing.price}
            <br />
            {listing && listing.city}
            <br />
            {listing && listing.state}
            <br />
            {listing && listing.country}
            <br />
            {listing && listing.guests}
            <br />
            {listing && listing.bedrooms}
            <br />
            {listing && listing.beds}
            <br />
            {listing && listing.baths}
        </div>
    )
}

export default ListingShowPage;