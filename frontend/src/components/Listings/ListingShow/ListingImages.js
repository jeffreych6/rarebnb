import "./ListingImages.css";

function ListingImages({ listingImages }) {

    return (
        <div className="listing-show-images-container">

            <img className="listing-show-image-large" src={listingImages[0]}></img>

            <div className="listing-show-image-small-container">
                <img className="listing-show-image-small" src={listingImages[1]}></img>
                <img id="image-2" className="listing-show-image-small" src={listingImages[2]}></img>
                <img className="listing-show-image-small" src={listingImages[3]}></img>
                <img id="image-4" className="listing-show-image-small" src={listingImages[4]}></img>
            </div>
        </div>
    )
}

export default ListingImages;