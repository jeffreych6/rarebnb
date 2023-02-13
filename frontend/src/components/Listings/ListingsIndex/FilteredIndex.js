import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listingsActions from "../../../store/listings";
import FilterBar from "./FilterBar"
import FilteredMap from "./FilteredMap"
import "./FilteredIndex.css";

function FilteredIndex() {
    const dispatch = useDispatch();
    const { filter } = useParams();

    const listings = useSelector(state => filter === "all" ? 
        Object.values(state.listings)
        :
        Object.values(state.listings).filter((listing) => listing.propertyType.toLowerCase().includes(filter.toLowerCase()) || listing.city.toLowerCase().includes(filter.toLowerCase()) || listing.country.toLowerCase().includes(filter.toLowerCase()))
    )

    useEffect(() => {
        dispatch(listingsActions.fetchListings())
    },[dispatch, filter])

    if (!listings) {
        return null;
    }

    const locations = []

    if (listings.length > 0) {
        for (let i = 0; i < listings.length; i++) {
            locations.push({
                id: listings[i].id,
                title: listings[i].title,
                propertyType: listings[i].propertyType,
                city: listings[i].city,
                state: listings[i].state,
                country: listings[i].country,
                price: listings[i].price,
                rating: listings[i].rating,
                location: {
                    lat: listings[i].lat,
                    lng: listings[i].lng
                },
                photo: listings[i].photosUrl[0]
            })
        }
    }
    
    const listing = listings.map((listing) => {
        return (
            <NavLink className="filtered-listings-index-container" to={`listings/${listing.id}`} key={listing.id}>
                <img className="filtered-listings-index-image" src={listing.photosUrl[0]} alt="listing"/>
                <div className="filtered-listings-index-description-container">
                    <div className="filtered-listings-index-description">
                        <div className="filtered-listings-index-location">
                            {listing.city}, {listing.state}
                        </div>
                        <div className="filtered-listings-index-rating">
                            <i className="fa-sharp fa-solid fa-star"></i> 
                            <span>{parseFloat(listing.rating).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="filtered-listings-index-title">
                        {listing.title} 
                    </div>
                    <div className="filtered-listings-index-price">
                        <span>${listing.price.toLocaleString("en-US")}</span> night
                    </div>
                </div>
            </NavLink>
        )
    })

    return (
        <>
            <div className="filtered-listings-index-filter-container">
                <FilterBar />
            </div>
            <div className="filtered-listings-container">
                <div className="filtered-listings-index">
                    {listings.length > 0 ? 
                        listing
                        :
                        <div className="filtered-listings-none-message">No listings found</div>
                    }
                </div>
                <div className="filtered-listings-map-container">
                    <div className="filtered-listings-map">
                        <FilteredMap listings={locations} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default FilteredIndex;