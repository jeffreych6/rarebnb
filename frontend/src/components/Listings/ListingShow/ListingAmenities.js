import "./ListingAmenities.css";
import airCon from "../../../assets/amenities/airCon.png"
import kitchen from "../../../assets/amenities/kitchen.png"
import parking from "../../../assets/amenities/parking.png"
import pets from "../../../assets/amenities/pets.png"
import washer from "../../../assets/amenities/washer.png"
import dryer from "../../../assets/amenities/dryer.png"
import wifi from "../../../assets/amenities/wifi.png"
import tv from "../../../assets/amenities/tv.png"
import workspace from "../../../assets/amenities/workspace.png"
import selfCheckIn from "../../../assets/amenities/selfCheckIn.png"

function ListingAmenities({ listing }) {
    return (
        <div className="listing-show-details-amenities">
            <h1>What this place offers</h1>
            <div className="listing-show-details-amenities-list">
                {listing.kitchen && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={kitchen} alt="kitchen"/> Kitchen
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
                {listing.dryer && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={dryer} alt="dryer"/> Dryer
                    </div>
                )}
                {listing.workspace && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={workspace} alt="workspace"/> Dedicated Workspace
                    </div>
                )}
                {listing.tv && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={tv} alt="tv"/> TV
                    </div>
                )}
                {listing.pets && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={pets} alt="pets"/> Pets allowed
                    </div>
                )}
                {listing.selfCheckIn && (
                    <div className="listing-show-details-amenities-list-item">
                        <img src={selfCheckIn} alt="selfCheckIn"/> Self Check-in
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListingAmenities;