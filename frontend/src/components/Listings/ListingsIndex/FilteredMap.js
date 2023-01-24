import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import "./FilteredMap.css"

const FilteredMap = ({listings}) => {
  const [selected, setSelected] = useState({});

  const mapStyles = {        
    height: "75vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 0, 
    lng: -15
  }

  const onSelect = item => {
    setSelected(item);
  }
  
  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap
          className="filtered-index-map"
          mapContainerStyle={mapStyles}
          zoom={2}
          center={defaultCenter}>
          {listings.map(item => {
              return (
                <Marker key={item.name} 
                position={item.location} 
                onClick={() => onSelect(item)}/>
              )
            })
          }
          {selected.location && (
            <InfoWindow position={selected.location} clickable={true} onCloseClick={() => setSelected({})}>
              <>
                <p className="filtered-listing-map-name">{selected.title}</p>
                <img className="filtered-listing-map-image" src={selected.photo} alt="map"></img>
              </>
            </InfoWindow>
            )
          }
        </GoogleMap>
     </LoadScript>
  )
}

export default FilteredMap;