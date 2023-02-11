import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listingsActions from "../../../store/listings";
import * as listingsUtils from "../../../utils/listings_utils"
import "./index.css";

function UserProfile() {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const listing = useSelector(listingsActions.getListing(listingId))

    useEffect(() => {
        dispatch(listingsActions.fetchListing(listingId))
    },[dispatch, listingId])

    if (!listing) {
        return null;
    }

    return (
        <>

        </>
    )
}

export default UserProfile;