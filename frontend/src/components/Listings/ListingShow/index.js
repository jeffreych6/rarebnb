import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listingsActions from "../../../store/listings";
import * as listingsUtils from "../../../utils/listings_utils"
import ListingImages from "./ListingImages"
import ListingAmenities from "./ListingAmenities"
import ReservationForm from "../../ReservationForm"
import ListingMap from "./ListingMap"
import Reviews from "../../Reviews"
import "./index.css";
import aircover from "../../../assets/aircover.png"

function ListingShowPage() {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const listing = useSelector(listingsActions.getListing(listingId))

    useEffect(() => {
        dispatch(listingsActions.fetchListing(listingId))
    },[dispatch, listingId])

    if (!listing) {
        return null;
    }

    return (
        <>
            <div className="listing-show-page-container">
                <div className="listing-show-header-container">
                    <h1 className="listing-show-header-title">{listing.title}</h1>
                    <div className="listing-show-header-description">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span className="listing-show-rating">{listing.rating} ·</span>
                        <a href="#reviews" className="listing-show-reviews">{listing.numRatings} reviews</a> ·
                        <a href="#map" className="listing-show-location">{listing.city}, {listing.state}, {listing.country}</a>
                    </div>
                </div>

                <ListingImages listingImages = {listing.photosUrl} />

                <div className="listing-show-container">
                    <div className="listing-show-details">
                        <div className="listing-show-details-title-container">
                            <div className="listing-show-details-title">
                                <h1>{listingsUtils.titleize(listing.propertyType)} hosted by {listing.firstName} {listing.lastName}</h1>
                                <h2>{listing.guests} {listing.guests > 1 ? "guests" : "guest"} · {listing.bedrooms} {listing.bedrooms > 1 ? "bedrooms" : "bedroom"} · {listing.beds} {listing.beds > 1 ? "beds" : "bed"} · {listing.baths} {listing.baths > 1 ? "baths" : "bath"}</h2>
                            </div>
                            <a href="#host">
                                <img className="listing-show-details-title-profile" src={listing.photoUrl} alt="profile" />
                            </a>
                        </div>

                        <div className="listing-show-aircover">
                            <img src={aircover} alt="aircover" />
                            <h1>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</h1>
                        </div>

                        <div className="listing-show-details-description">{listing.description}</div>

                        <ListingAmenities listing = {listing} />
                    </div>

                    <div className="listing-show-reservations-container">
                        <ReservationForm listing = {listing} />
                    </div>
                </div>

                <div id="reviews" className="listing-show-reviews-container">
                    <Reviews listing = {listing} listingId = {listingId} />
                </div>
                
                <div id="map" className="listing-show-map-container">
                    <h1>Where you'll be</h1>
                    <ListingMap listing = {listing} />
                    <h2>{listing.city}, {listing.state}, {listing.country}</h2>
                </div>

                <div id="host" className="listing-show-host-container">
                    <div className="listing-show-host-title-container">
                        <NavLink to={`/users/${listing.hostId}`}>
                            <img className="listing-show-host-profile" src={listing.photoUrl} alt="profile" />
                        </NavLink>

                        <div className="listing-show-host-name">
                            <h1>Hosted by {listing.firstName}</h1>
                            <span>Joined in September 2022</span>
                        </div>
                    </div>

                    <div className="listing-show-host-details-container">
                        <div className="listing-show-host-details-left">
                            <div className="listing-show-host-attributes">
                                <div className="listing-show-host-attribute">
                                    <i class="fa-solid fa-laptop"></i>
                                    <h1>Software Engineer</h1>
                                </div>
                                <div className="listing-show-host-attribute">
                                    <i class="fa-solid fa-check"></i>
                                    <h1>Identity verified</h1>
                                </div>
                                <div className="listing-show-host-attribute">
                                    <i class="fa-solid fa-medal"></i>
                                    <h1>Superhost</h1>
                                </div>
                            </div>
                            {listing.hostId === 2 ? 
                                <div className="listing-show-host-description">I am the superhost of most of these rare, amazing listings on RareBnB. I am also a software engineer based in New York, NY. Building this Airbnb clone was very enjoyable and was a great learning experience. Feel free to check out my listings and projects</div>
                                :
                                <div className="listing-show-host-description">RareBnb is the best platform ever for booking and hosting. Thanks Jeffrey!</div>
                            }
                            <h1 className="listing-show-host-superhost">{listing.firstName} is a Superhost</h1>
                            <div className="listing-show-host-superhost-description">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
                        </div>

                        <div className="listing-show-host-details-right">
                            <div className="listing-show-host-right-attribute">Language: English</div>
                            <div className="listing-show-host-right-attribute">Response rate: 100%</div>
                            <div className="listing-show-host-right-attribute">Response time: within a few hours</div>
                            <NavLink to={`/users/${listing.hostId}`}>
                                <button className="listing-show-host-contact-button">Contact Host</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingShowPage;