import "./ListingAmenities.css";
import airCon from "../../../assets/amenities/airCon.png"
import kitchen from "../../../assets/amenities/kitchen.png"
import parking from "../../../assets/amenities/parking.png"
import pets from "../../../assets/amenities/pets.png"
import washer from "../../../assets/amenities/washer.png"
import wifi from "../../../assets/amenities/wifi.png"

function ListingAmenities({ listing }) {


    return (
        <div className="listing-show-details-amenities">
            <h1>What this place offers</h1>
            <div className="listing-show-details-amenities-list">
                {listing.kitchen && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={kitchen} alt="kitchen"/>Kitchen
                    </div>
                )}
                {listing.wifi && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={wifi} alt="wifi"/> Wifi
                    </div>
                )}
                {listing.parking && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={parking} alt="parking"/> Parking
                    </div>
                )}
                {listing.airCon && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={airCon} alt="airCon"/> Air Conditioning
                    </div>
                )}
                {listing.washer && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={washer} alt="washer"/> Washer
                    </div>
                )}
                {listing.pets && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={pets} alt="pets"/>Pets allowed
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListingAmenities;